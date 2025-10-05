import { Link, useParams } from "react-router-dom";
import classes from "./ProjectList.module.css";
import ProjectCard from "./ProjectCard";
import Button from "../UI/Button";
import Card from "../UI/Card";
import getFile from "../../helper/getFile";
import { useState } from "react";
import RadioButton from "../UI/RadioButton";
import getProjects from "../../helper/getProjects";

const ProjectList = () => {
  //Make Sure we are at the top of the page!
  window.scrollTo(0, 0);
  const [selectedValue, setSelectedValue] = useState("All");
  const params = useParams();
  let title = params.name.charAt(0).toUpperCase() + params.name.slice(1);
  let projectItems;

  const PROJECTS = getProjects(params.name);
  let projects = PROJECTS;

  //generate the cards.  The email card (in the else statement) is special becuase it loads PDF's
  function generateCards(projects) {
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
            <a href={getFile(project.id)} target="_blank" rel="noreferrer">
              <Card>{project.name}</Card>
            </a>
          </li>
        );
      }
    });
  }

  //For the writing section, filter the projects by value
  let filteredProjects = [];
  let SKILLS = [
    { id: "s0", name: "All" },
    { id: "s1", name: "NonFiction" },
    { id: "s2", name: "Fiction" },
    { id: "s3", name: "Newspaper" },
  ];

  if (selectedValue !== "All") {
    filteredProjects = projects.filter((project) => {
      return project.type === selectedValue;
    });
  } else {
    filteredProjects = projects;
  }

  //Put the content into cards
  projectItems = generateCards(filteredProjects);

  return (
    <div className={classes.category}>
      <section className="banner">
        <h1>{title}</h1>
      </section>
      {params.name === "writing" && (
        <ul className={classes.projectFilterBar}>
          {SKILLS.map((skill) => (
            <RadioButton
              key={skill.id}
              id={skill.id}
              name={"Project Filter List"}
              value={skill.name}
              label={skill.name}
              setSelectedValue={setSelectedValue}
            />
          ))}
        </ul>
      )}

      <ul className={classes.projectsList}>{projectItems}</ul>

      <div className="btnBox">
        <Link to="/projects">
          <Button>Back to Projects</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectList;
