import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MuiButton from "@mui/material/Button";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.default",
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Playfair Display", serif',
              textAlign: "center",
              color: "primary.main",
              mb: 2,
              fontWeight: 600,
            }}
          >
            My name is Jami Downs
          </Typography>

          <Box
            sx={{
              width: 80,
              height: 2,
              backgroundColor: "secondary.main",
              mx: "auto",
              my: 3,
            }}
          />

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              mb: 4,
              lineHeight: 1.8,
              color: "text.secondary",
              maxWidth: 680,
              mx: "auto",
            }}
          >
            Hello! My name is Jami Downs and I am a student at Brigham Young
            University Idaho. I am studying Communications with an emphasis in
            Digital and Social Media. The projects shown on this website are a
            combination of the many assignments I completed through my education.
            I enjoyed working on these projects and I hope you enjoy looking
            through them.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <MuiButton
              variant="contained"
              component={Link}
              to="/projects"
              size="large"
              sx={{ px: 5, py: 1.5 }}
            >
              See Projects
            </MuiButton>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HomePage;
