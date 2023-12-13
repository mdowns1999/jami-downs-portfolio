import { Link, useParams } from "react-router-dom";
import classes from "./ProjectList.module.css";
import ProjectCard from "./ProjectCard";
import file from "../../assets/project-files/projects.json"
import Button from "../UI/Button";

const ProjectList = () => {
  const params = useParams();
  let title = params.name.charAt(0).toUpperCase() + params.name.slice(1);

  console.log(file)
  
  const PROJECTS = file;

  let projectList = PROJECTS.filter(
    (category) => category.name === params.name
  );
  let projects = projectList[0].projects;
  return (
    <div className={classes.category}>
      <section className="banner">
        <h1>{title}</h1>
      </section>
      <ul className={classes.projectsList}>
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <ProjectCard link={project.id} name={project.name} />
            </li>
          );
        })}
      </ul>

      <div className={classes.btnBox}>
              <Button>
                <Link to="/projects">Back to Projects</Link>
              </Button>
            </div>
    </div>
  );
};

export default ProjectList;
