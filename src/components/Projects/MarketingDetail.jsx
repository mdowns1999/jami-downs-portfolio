import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import getProjects from "../../helper/getProjects";

const MarketDetail = ({ name, id }) => {
  const projects = getProjects(name);
  const project = projects.filter((p) => p.id === id)[0];
  const title = project.name;
  const link = project.link;
  const content = project.description;

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
          {title}
        </Typography>
      </Box>

      {link && (
        <Box
          sx={{
            position: "relative",
            pb: "56.25%",
            height: 0,
            overflow: "hidden",
            borderRadius: 2,
            my: 3,
            boxShadow: 3,
          }}
        >
          <Box
            component="iframe"
            src={link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: 2,
            }}
          />
        </Box>
      )}

      {content && (
        <Typography
          variant="body1"
          sx={{ mt: 2, textAlign: "center", color: "text.secondary", lineHeight: 1.7 }}
        >
          {content}
        </Typography>
      )}
    </Container>
  );
};

MarketDetail.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MarketDetail;
