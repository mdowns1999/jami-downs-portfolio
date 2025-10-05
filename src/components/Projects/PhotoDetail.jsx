// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import getProjects from "../../helper/getProjects";
import imageMap from "../../assets/imageMappings"; // Import the image mappings
import classes from "./ProjectDetailPage.module.css";

const PhotoDetail = (props) => {
  console.log("PROPS ID " + props.id);
  let projects = getProjects(props.name);
  console.log(projects);

  let project = projects.find((project) => project.id === props.id);
  console.log(project);

  if (!project) {
    return <div>Project not found</div>;
  }

  let title = project.name;
  let content = project.description;
  let images = project.photos.map((photo, index) => (
    <img
      src={imageMap[photo.image]} // Use the mapping to get the image path
      alt={photo.description}
      key={"img" + index}
    ></img>
  ));

  return (
    <div className={classes.detailContainer}>
      <section className="banner">
        <h1>{title}</h1>
      </section>
      <div className={classes.content}>{content}</div>
      <div className={classes.images}>{images}</div>
    </div>
  );
};

// Define PropTypes
PhotoDetail.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PhotoDetail;
