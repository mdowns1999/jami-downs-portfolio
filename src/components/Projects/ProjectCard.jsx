import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  let name = props.name.charAt(0).toUpperCase() + props.name.slice(1);
  return (
    <Link to={`${props.link}`}>
      <div className={classes.projectCard}>{name}</div>
    </Link>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
