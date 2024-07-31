import Button from "../UI/Button";
import classes from "./HomePage.module.css";

import { Link } from "react-router-dom";

const HomePage = () => {
  //Make Sure we are at the top of the page!
  window.scrollTo(0, 0);

  return (
    <>
      <div className={classes.home}>
        <div className={classes.homeWrapper}>
          <section className={classes.welcomeBox + " " + classes.fadeIn}>
            <h1>My name is Jami Downs</h1>

            <p className={classes.text}>
              Hello! My name is Jami Downs and I am a student at
              Brigham Young University Idaho. I am studying Communications with
              an emphasis in Digital and Social Media. The projects shown on
              this website are a combination of the many assignments I completed
              through my education. I enjoyed working on these projects and I
              hope you enjoy looking through them.
            </p>

            <div className="btnBox">
              <Link to="/projects">
                <Button>See Projects</Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
