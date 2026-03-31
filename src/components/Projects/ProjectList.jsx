import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiButton from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ProjectCard from "./ProjectCard";
import getFile from "../../helper/getFile";
import getProjects from "../../helper/getProjects";

const FILTER_OPTIONS = [
  { id: "s0", name: "All" },
  { id: "s1", name: "NonFiction" },
  { id: "s2", name: "Fiction" },
  { id: "s3", name: "Newspaper" },
];

const chipLabelForType = {
  Social: "Video",
  NonFiction: "NonFiction",
  Fiction: "Fiction",
  Newspaper: "Newspaper",
};

const ProjectList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedValue, setSelectedValue] = useState("All");
  const params = useParams();
  const title = params.name.charAt(0).toUpperCase() + params.name.slice(1);

  const PROJECTS = getProjects(params.name);

  const filteredProjects =
    selectedValue !== "All"
      ? PROJECTS.filter((p) => p.type === selectedValue)
      : PROJECTS;

  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          maxWidth: 250,
          mx: "auto",
          my: 3,
          py: 2,
          borderTop: "1px solid",
          borderBottom: "1px solid",
          borderColor: "text.primary",
        }}
      >
        <Typography variant="h4" sx={{ fontFamily: '"Playfair Display", serif' }}>
          {title}
        </Typography>
      </Box>

      {params.name === "writing" && (
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <ToggleButtonGroup
            value={selectedValue}
            exclusive
            onChange={(_, newValue) => {
              if (newValue !== null) setSelectedValue(newValue);
            }}
            sx={{ flexWrap: "wrap", justifyContent: "center", gap: 0.5 }}
          >
            {FILTER_OPTIONS.map((opt) => (
              <ToggleButton key={opt.id} value={opt.name}>
                {opt.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      )}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: 3,
          maxWidth: 1200,
          mx: "auto",
          px: 3,
        }}
      >
        {filteredProjects.map((project) => {
          if (project.type === "Email") {
            return (
              <Card
                key={project.id}
                sx={{
                  minHeight: 140,
                  borderLeft: "4px solid",
                  borderLeftColor: "secondary.main",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  "&:hover": { transform: "translateY(-3px)", boxShadow: 6 },
                  borderRadius: 2,
                  backgroundColor: "background.paper",
                }}
              >
                <CardActionArea
                  component="a"
                  href={getFile(project.id)}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <CardContent sx={{ width: "100%" }}>
                    <Typography
                      variant="h6"
                      sx={{ fontFamily: '"Playfair Display", serif', mb: 1.5 }}
                    >
                      {project.name}
                    </Typography>
                    <Chip
                      label="PDF"
                      size="small"
                      color="secondary"
                      sx={{ fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.08em" }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          }

          return (
            <ProjectCard
              key={project.id}
              link={project.id}
              name={project.name}
              chipLabel={chipLabelForType[project.type]}
            />
          );
        })}
      </Box>

      <Box sx={{ maxWidth: 300, mx: "auto", my: 4, textAlign: "center" }}>
        <MuiButton variant="contained" component={Link} to="/projects">
          Back to Projects
        </MuiButton>
      </Box>
    </Box>
  );
};

export default ProjectList;
