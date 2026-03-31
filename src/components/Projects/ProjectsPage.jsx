import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";

const projectSubjects = [
  { id: "1", name: "marketing" },
  { id: "2", name: "photography" },
  { id: "3", name: "writing" },
];

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          Projects
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: 4,
          maxWidth: 1200,
          mx: "auto",
          px: 3,
          pb: 6,
        }}
      >
        {projectSubjects.map((project) => (
          <ProjectCard
            key={project.id}
            link={project.name}
            name={project.name}
            isCategoryTile
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectsPage;
