import { Link } from "react-router-dom";
import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return(
    <Link to={`${props.link}`}>
  <div className={classes.projectCard}>
    
      {props.name.toUpperCase()}
  </div>
  </Link>);
};

export default ProjectCard;