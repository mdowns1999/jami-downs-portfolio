import { useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MuiButton from "@mui/material/Button";
import resume from "../../assets/files/jamiResume.pdf";
import aboutPhoto from "../../assets/images/aboutJami.jpg";
import skillsPhoto from "../../assets/images/skillsPhoto.jpg";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ backgroundColor: "background.default" }}>
      {/* Banner */}
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
          About
        </Typography>
      </Box>

      {/* Personal Life Section */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "7fr 5fr" },
            gap: 4,
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{ fontFamily: '"Playfair Display", serif', mb: 3, color: "primary.main" }}
            >
              Personal life
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
              I was born just outside of Dallas, Texas and am the middle child in
              a family of five kids. I moved around a little while growing up and
              have lived in Texas, Washington, and now Idaho. When I was 14, my
              parents bought an old daycare in the southwest Boise area, and we
              spent the summer converting it into a house. I lived there with my
              family through high school. Shortly after I graduated, I moved to
              Rexburg, Idaho to begin studying at Brigham Young University Idaho.
              After my first semester, I met my now husband, Mike Downs, and I
              haven&apos;t spent a day without him since.
            </Typography>

            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Throughout my few years at BYU-Idaho, I changed career paths a few
              times, but I always stayed within the communication realm. I started
              out with an emphasis in Journalism but quickly realized that it
              wasn&apos;t right for me. I did some research and decided to look into
              copywriting. I took many different writing classes and truly enjoyed
              them, but I still didn&apos;t feel like it was right for me. I went back
              to my research, and realized that I wanted to go into marketing. I
              did not want to change my major to a business degree since I was so
              far along in communications, so I looked at my options in
              communications and discovered digital and social media. This program
              balanced marketing and design and I fell in love with the classes.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src={aboutPhoto}
              alt="Jami Downs"
              sx={{
                width: { xs: "70%", sm: "50%", md: "80%" },
                borderRadius: 3,
                boxShadow: 3,
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* Skills Section — forest green background replaces the old #9cafb7 */}
      <Box sx={{ backgroundColor: "primary.main", py: 6 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "5fr 7fr" },
              gap: 4,
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="img"
                src={skillsPhoto}
                alt="Jami Downs"
                sx={{
                  width: { xs: "70%", sm: "50%", md: "80%" },
                  borderRadius: 3,
                  boxShadow: 4,
                }}
              />
            </Box>

            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  color: "white",
                  mb: 3,
                }}
              >
                My Skills
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "white", lineHeight: 1.8, mb: 4 }}
              >
                As mentioned above, I have taken many writing courses. Most of
                the projects on here display my writing skills in various styles.
                Aside from writing, I have some projects displaying my
                photography. I took a course in digital imaging and learned
                quickly. I used many of the Adobe programs, specifically Adobe
                Bridge, Camera Raw, and Photoshop to edit my photos and organize
                them. I recently took courses in Social Media and Email marketing,
                learning the Meta programs as well as Campaign Monitor. I fell in
                love with these fields and learned many different marketing
                strategies.
              </Typography>

              <MuiButton
                variant="outlined"
                component="a"
                href={resume}
                target="_blank"
                rel="noreferrer"
                sx={{
                  color: "white",
                  borderColor: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderColor: "secondary.light",
                  },
                }}
              >
                See Resume
              </MuiButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;
