import { useRouteError, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MuiButton from "@mui/material/Button";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An Error Occurred";
  let message = "Something went wrong! Please try again later.";

  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find that page.";
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="sm" sx={{ textAlign: "center", py: 6 }}>
          <Typography
            variant="h3"
            sx={{ fontFamily: '"Playfair Display", serif', mb: 2, color: "primary.main" }}
          >
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
            {message}
          </Typography>
          <MuiButton variant="contained" component={Link} to="/">
            Go Home
          </MuiButton>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default ErrorPage;
