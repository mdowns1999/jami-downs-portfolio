import { Link } from "react-router-dom";
import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  let name = props.name.charAt(0).toUpperCase() + props.name.slice(1);
  return (
    <Link to={`${props.link}`}>
      <div className={classes.projectCard}>{name}</div>
    </Link>
  );
};

export default ProjectCard;
