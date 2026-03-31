import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import getProjects from "../../helper/getProjects";

const WritingDetail = ({ name, id }) => {
  const projects = getProjects(name);
  const project = projects.filter((p) => p.id === id)[0];
  const title = project.name;

  return (
    <Container maxWidth="sm" sx={{ my: 4 }}>
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

      <Box sx={{ mt: 3 }}>
        {project.content.map((paragraph, index) => (
          <Typography
            key={"para" + index}
            variant="body1"
            sx={{ mb: 2, lineHeight: 1.8, letterSpacing: "0.3px" }}
          >
            {paragraph}
          </Typography>
        ))}
      </Box>
    </Container>
  );
};

WritingDetail.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default WritingDetail;
