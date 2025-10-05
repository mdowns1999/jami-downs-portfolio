import classes from "./Footer.module.css";
import linkedin from "../../assets/images/In-White-40.png";
import insta from "../../assets/images/instaGramLogoWhite.png";

const Footer = () => {
  //Get Year for Footer
  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <div className={classes.contact}>
        <p>Contact Me:</p>
        <a href="mailto:jamiaknight5@gmail.com">jamiaknight5@gmail.com</a>
      </div>
      <div className={classes.copyright}>&copy; Jami Downs {year}</div>
      <div className={classes.social}>
        <div className={classes.linkedinBox}>
          <a
            href="https://www.linkedin.com/in/jami-knight/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className={classes.linkedin}
              src={linkedin}
              alt="LinkedIn Logo"
            ></img>
          </a>
        </div>
        <div className={classes.instagramBox}>
          <a
            href="https://www.instagram.com/photographyby_jami/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className={classes.instagram}
              src={insta}
              alt="LinkedIn Logo"
            ></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
