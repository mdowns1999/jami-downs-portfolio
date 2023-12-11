import Button from "../UI/Button";
import classes from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <>
      <div className={classes.about}>
      <section className={classes.aboutBox}>
          <div>
            <h1>Personal life</h1>

            <p className={classes.text}>
              I was born and raised in Rexburg Idaho. I graduated from Madison
              High School in 2017. I then served a two year mission for the
              Church of Jesus Christ of Latter Day Saints. After returning from
              my mission I started attending school at Brigham Young University
              - Idaho (BYU-I).I enjoy the outdoors, reading, and being with my
              family.
            </p>

            <p className={classes.text}>
              My current major is Software Engineering. In my major, I am also
              working on certificates in Software Desgin, Web Development, and
              general computer programming.
            </p>
          </div>

          <img
            src={require("../../assets/images/blank.png")}
            alt="Jami Downs"
          ></img>
        </section>

        <div className={classes.skilsWrapper}>
          <section className={classes.skillsBox}>
          <img
            src={require("../../assets/images/blank.png")}
            alt="Jami Downs"
          ></img>
            <div className={classes.skillsContent}>
              <h1>My Skills</h1>
              <p className={classes.text}>
                I have worked on a number of projects. I know a handful of
                languages. I am more familiar with some than others, but those
                languages include: Python, C++, HTML, CSS, Javascript, and
                MYSQL. I have also used Javascript frameworks like React and
                Angular. I have also done a little backend work with Node,
                Epxress, and MongoDB. The progress bars down below show my exact
                familiarity with each language.
              </p>

              <p className={classes.text}>
                Outside of programming, I strive to be diligent in my work and
                work well with teams. I am good at time management and have
                developed a good work ethic from my previous jobs. To see some
                of the other jobs I have worked, feel free to look at my resume
                below.
              </p>
              <div className={classes.btnBox}>
                <Button>
                  <a href={"#"} target="_blank" rel="noreferrer">
                    See Resume
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
