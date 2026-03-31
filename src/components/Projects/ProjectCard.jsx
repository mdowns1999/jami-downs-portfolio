import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CreateIcon from "@mui/icons-material/Create";
import CampaignIcon from "@mui/icons-material/Campaign";

const categoryIcons = {
  marketing: <CampaignIcon sx={{ fontSize: 48, color: "secondary.main" }} />,
  photography: <CameraAltIcon sx={{ fontSize: 48, color: "secondary.main" }} />,
  writing: <CreateIcon sx={{ fontSize: 48, color: "secondary.main" }} />,
};

const ProjectCard = ({ name, link, isCategoryTile, chipLabel }) => {
  const displayName = name.charAt(0).toUpperCase() + name.slice(1);

  if (isCategoryTile) {
    return (
      <Card
        sx={{
          minHeight: 220,
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          "&:hover": { transform: "translateY(-4px)", boxShadow: 8 },
          borderRadius: 3,
          backgroundColor: "background.paper",
        }}
      >
        <CardActionArea
          component={Link}
          to={link}
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <Box sx={{ height: 6, backgroundColor: "secondary.main", width: "100%" }} />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              py: 5,
              flex: 1,
            }}
          >
            {categoryIcons[name.toLowerCase()]}
            <Typography
              variant="h5"
              sx={{ fontFamily: '"Playfair Display", serif', textTransform: "capitalize" }}
            >
              {displayName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  return (
    <Card
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
        component={Link}
        to={link}
        sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}
      >
        <CardContent sx={{ width: "100%" }}>
          <Typography
            variant="h6"
            sx={{ fontFamily: '"Playfair Display", serif', mb: chipLabel ? 1.5 : 0 }}
          >
            {displayName}
          </Typography>
          {chipLabel && (
            <Chip
              label={chipLabel}
              size="small"
              color="secondary"
              sx={{ fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.08em" }}
            />
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  isCategoryTile: PropTypes.bool,
  chipLabel: PropTypes.string,
};

export default ProjectCard;
