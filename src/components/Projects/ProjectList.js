import { Link, useParams } from "react-router-dom";
import classes from "./ProjectList.module.css";
import ProjectCard from "./ProjectCard";
import file from "../../assets/project-files/projects.json";
import Button from "../UI/Button";
import Card from "../UI/Card";
import getFile from "../../helper/getFile";

const ProjectList = () => {
  const params = useParams();
  let title = params.name.charAt(0).toUpperCase() + params.name.slice(1);

  const PROJECTS = file;
  let projectList = PROJECTS.filter(
    (category) => category.name === params.name
  );
  let projects = projectList[0].projects;

  function getItems(projects) {
    return projects.map((project) => {
      if (project.type !== "Email") {
        return (
          <li key={project.id}>
            <ProjectCard link={project.id} name={project.name} />
          </li>
        );
      } else {
        return (
          <li key={project.id}>
            <a href={getFile(project.name)} target="_blank" rel="noreferrer">
              <Card>{project.name}</Card>
            </a>
          </li>
        );
      }
    });
  }
  let projectItems = getItems(projects);
  return (
    <div className={classes.category}>
      <section className="banner">
        <h1>{title}</h1>
      </section>
      <ul className={classes.projectsList}>{projectItems}</ul>

      <div className="btnBox">
        <Button>
          <Link to="/projects">Back to Projects</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectList;
