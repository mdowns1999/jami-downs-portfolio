import PropTypes from "prop-types";
import getProjects from "../../helper/getProjects";
import classes from "./ProjectDetailPage.module.css";

const MarketDetail = (props) => {
  let projects = getProjects(props.name);
  let project = projects.filter((project) => project.id === props.id);
  let title = project[0].name;
  let link = project[0].link;
  let content = project[0].description;

  return (
    <div className={classes.detailContainer}>
      <section className="banner">
        <h1>{title}</h1>
      </section>
      <div className={classes.content}>
        <div className={classes.video}>
          <iframe
            src={link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
            allowFullScreen
          ></iframe>
        </div>
        <div className={classes.content}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

MarketDetail.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MarketDetail;
