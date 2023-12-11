import { Link } from "react-router-dom";
import classes from "./ProjectsPage.module.css";

const ProjectsPage = () => {
  let projectSubjects = [
    {
      id: "1",
      name: "photography",
      image: require("../../assets/images/blank.png"),
    },
    {
      id: "2",
      name: "writing",
      image: require("../../assets/images/blank.png"),
    },
    {
      id: "3",
      name: "marketing",
      image: require("../../assets/images/blank.png"),
    },
  ];
  return (
    <div className={classes.projects}>
      <section className="banner">
        <h1>Projects</h1>
        {/* <p>
          A small description about projects. A small description about
          projects. A small description about projects. A small description
          about projects. A small description about projects. A small
          description about projects. A small description about projects. A
          small description about projects. A small description about projects.
          A small description about projects. A small description about
          projects. A small description about projects. A small description
          about projects. A small description about projects. A small
          description about projects. A small description about projects. A
          small description about projects. A small description about projects.
        </p> */}
      </section>

      <section className={classes.subjects}>
        {projectSubjects.map((project) => {
            return <div className={classes.subjectBox} key={project.id} > 
                <Link to={`${project.name}`}><h2>{project.name.toUpperCase()}</h2></Link>
            </div>
        })}
      </section>
    </div>
  );
};

export default ProjectsPage;
