import Button from "../UI/Button";
import classes from "./HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className={classes.home}>
        <div className={classes.homeWrapper}>
          <section className={classes.welcomeBox + " " + classes.fadeIn}>
            <h1>HOME</h1>

            <p className={classes.text}>
              I am a Software Engineer that strives to build quality projects. I
              am a student learning the best practices in the world of web
              development as well as how to implement good design practices to
              strive to make my code clean, reusable, and efficient. If you want
              to see what I have done, check out the projects page to see what I
              have built! If you want to get ahold of me, you will find my email
              at the bottom of the page or on my resume.
            </p>

            <div className={classes.btnBox}>
              <Button>
                <Link to="/projects">See Projects</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
