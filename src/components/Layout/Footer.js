import classes from "./Footer.module.css";

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
              src={require("../../assets/images/In-White-40.png")}
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
