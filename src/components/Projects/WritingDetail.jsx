import PropTypes from "prop-types";
import getProjects from "../../helper/getProjects";
import classes from "./ProjectDetailPage.module.css";

const WritingDetail = (props) => {
  let projects = getProjects(props.name);
  console.log(projects);
  let project = projects.filter((project) => project.id === props.id);
  let title = project[0].name;
  let content = project[0].content.map((paragraph, index) => (
    <p key={"para" + index}>{paragraph}</p>
  ));
  return (
    <div className={classes.detailContainer}>
      <section className="banner">
        <h1>{title}</h1>
      </section>
      <div className={classes.content}>{content}</div>
    </div>
  );
};

WritingDetail.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default WritingDetail;
