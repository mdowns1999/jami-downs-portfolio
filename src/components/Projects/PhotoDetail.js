import getProjects from "../../helper/getProjects";
import classes from "./ProjectDetailPage.module.css";

const PhotoDetail = (props) => {
  let projects = getProjects(props.name);
  console.log(projects);
  let project = projects.filter((project) => project.id === props.id);
  console.log(project);
  let title = projects[0].name;
  let content = projects[0].description;
  console.log(projects[0].photos[0]);
  let images = projects[0].photos.map((photo, index) => (
    <img
      src={require("../../assets/images/" + photo.image)}
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

export default PhotoDetail;
