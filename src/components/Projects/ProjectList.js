import { Link, useParams } from "react-router-dom";
import classes from "./ProjectList.module.css";
import ProjectCard from "./ProjectCard";
import Button from "../UI/Button";

const ProjectList = () => {
  const params = useParams();
  let title = params.name.charAt(0).toUpperCase() + params.name.slice(1);

  const PROJECTS = [
    {
      name: "writing",
      projects: [
        { id: "w1", name: "Writing Project 1" },
        { id: "w2", name: "Writing Project 2" },
        { id: "w3", name: "Writing Project 3" },
      ],
    },
    {
      name: "marketing",
      projects: [
        { id: "m1", name: "Marketing Project 1" },
        { id: "m2", name: "Marketing Project 2" },
        { id: "m3", name: "Marketing Project 3" },
      ],
    },
    {
      name: "photography",
      projects: [
        { id: "ph1", name: "Photo Project 1" },
        { id: "ph2", name: "Photo Project 2" },
        { id: "ph3", name: "Photo Project 3" },
      ],
    },
  ];

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
