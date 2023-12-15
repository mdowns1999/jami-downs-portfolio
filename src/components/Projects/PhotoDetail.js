import getProjects from "../../helper/getProjects";
import classes from "./ProjectDetailPage.module.css";

const PhotoDetail = (props) => {
  console.log("PROPS ID " + props.id)
  let projects = getProjects(props.name);
   console.log(projects);
  let project = projects.filter((project) => project.id === props.id);
  console.log(project);
  let title = project[0].name;
  let content = project[0].description;
  let images = project[0].photos.map((photo, index) => (
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
