import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        py: 3,
        px: 2,
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
        gap: 2,
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box>
        <Typography sx={{ mb: 0.5, fontFamily: '"Lato", sans-serif' }}>
          Contact Me:
        </Typography>
        <MuiLink
          href="mailto:jamiaknight5@gmail.com"
          sx={{
            color: "white",
            fontFamily: '"Lato", sans-serif',
            "&:hover": { color: "secondary.main" },
          }}
        >
          jamiaknight5@gmail.com
        </MuiLink>
      </Box>

      <Typography sx={{ fontFamily: '"Lato", sans-serif' }}>
        &copy; Jami Downs {year}
      </Typography>

      <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <MuiLink
          href="https://www.linkedin.com/in/jami-knight/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
        >
          <LinkedInIcon sx={{ color: "white", fontSize: 40, display: "block" }} />
        </MuiLink>
        <MuiLink
          href="https://www.instagram.com/photographyby_jami/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram profile"
        >
          <InstagramIcon sx={{ color: "white", fontSize: 40, display: "block" }} />
        </MuiLink>
      </Box>
    </Box>
  );
};

export default Footer;
