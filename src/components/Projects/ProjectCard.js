import { Link } from "react-router-dom";
import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return(
  <div className={classes.ProjectCard}>
    <Link to={`${props.name}`}>
      <h2>{props.name.toUpperCase()}</h2>
    </Link>
  </div>);
};

export default ProjectCard;