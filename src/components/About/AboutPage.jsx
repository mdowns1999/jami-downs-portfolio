import Button from "../UI/Button";
import resume from "../../assets/files/jamiResume.pdf";
import classes from "./AboutPage.module.css";
import aboutPhoto from "../../assets/images/aboutJami.jpg";
import skillsPhoto from "../../assets/images/skillsPhoto.jpg";

const AboutPage = () => {
  //Make Sure we are at the top of the page!
  window.scrollTo(0, 0);
  return (
    <>
      <div className={classes.about}>
        <section className="banner">
          <h1>About</h1>
        </section>
        <section className={classes.aboutBox}>
          <div>
            <h1>Personal life</h1>

            <p className={classes.text}>
              I was born just outside of Dallas, Texas and am the middle child
              in a family of five kids. I moved around a little while growing up
              and have lived in Texas, Washington, and now Idaho. When I was 14,
              my parents bought an old daycare in the southwest Boise area, and
              we spent the summer converting it into a house. I lived there with
              my family through high school. Shortly after I graduated, I moved
              to Rexburg, Idaho to begin studying at Brigham Young University
              Idaho. After my first semester, I met my now husband, Mike Downs,
              and I haven’t spent a day without him since.
            </p>

            <p className={classes.text}>
              Throughout my few years at BYU-Idaho, I changed career paths a few
              times, but I always stayed within the communication realm. I
              started out with an emphasis in Journalism but quickly realized
              that it wasn’t right for me. I did some research and decided to
              look into copywriting. I took many different writing classes and
              truly enjoyed them, but I still didn’t feel like it was right for
              me. I went back to my research, and realized that I wanted to go
              into marketing. I did not want to change my major to a business
              degree since I was so far along in communications, so I looked at
              my options in communications and discovered digital and social
              media. This program balanced marketing and design and I fell in
              love with the classes.
            </p>
          </div>

          <img src={aboutPhoto} alt="Jami Downs"></img>
        </section>

        <div className={classes.skilsWrapper}>
          <section className={classes.skillsBox}>
            <img src={skillsPhoto} alt="Jami Downs"></img>
            <div className={classes.skillsContent}>
              <h1>My Skills</h1>
              <p className={classes.text}>
                As mentioned above, I have taken many writing courses. Most of
                the projects on here display my writing skills in various
                styles. Aside from writing, I have some projects displaying my
                photography. I took a course in digital imaging and learned
                quickly. I used many of the Adobe programs, specifically Adobe
                Bridge, Camera Raw, and Photoshop to edit my photos and organize
                them. I recently took courses in Social Media and Email
                marketing, learning the Meta programs as well as Campaign
                Monitor. I fell in love with these fields and learned many
                different marketing strategies.
              </p>

              <div className="btnBox">
                <a href={resume} target="_blank" rel="noreferrer">
                  <Button>See Resume</Button>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
