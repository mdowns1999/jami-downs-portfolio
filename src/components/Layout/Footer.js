import classes from "./Footer.module.css";

const Footer = () => {
  //Get Year for Footer
  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <div className={classes.contact}>
        <p>Contact Me:</p>
        <a href="mailto:michaeljdowns99@gmail.com">michaeljdowns99@gmail.com</a>
      </div>
      <div className={classes.copyright}>&copy; Jami Downs {year}</div>
      <div className={classes.social}>
        <div className={classes.linkedinBox}>
          <a
            href="https://www.linkedin.com/in/mike-downs/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className={classes.linkedin}
              src={require("../../assets/images/In-White-40.png")}
              alt="LinkedIn Logo"
            ></img>
          </a>
        </div>
        <div className={classes.instagramBox}>
          <a
            href="https://www.linkedin.com/in/mike-downs/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className={classes.instagram}
              src={require("../../assets/images/instaGramLogoWhite.png")}
              alt="LinkedIn Logo"
            ></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
