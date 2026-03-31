import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import getProjects from "../../helper/getProjects";
import imageMap from "../../assets/imageMappings";

const PhotoDetail = ({ id, name }) => {
  const projects = getProjects(name);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Container maxWidth="sm" sx={{ my: 4, textAlign: "center" }}>
        <Typography variant="h5">Project not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
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
          {project.name}
        </Typography>
      </Box>

      <Typography
        variant="body1"
        sx={{ my: 2, textAlign: "center", color: "text.secondary", lineHeight: 1.7 }}
      >
        {project.description}
      </Typography>

      <ImageList variant="masonry" cols={2} gap={12} sx={{ mt: 3 }}>
        {project.photos.map((photo, index) => (
          <ImageListItem key={"img" + index}>
            <Box
              component="img"
              src={imageMap[photo.image]}
              alt={photo.description}
              sx={{ borderRadius: 2, width: "100%", display: "block" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

PhotoDetail.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PhotoDetail;
