import classes from "./ProjectsPage.module.css";
import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {
  //Make Sure we are at the top of the page!
  window.scrollTo(0, 0);

  let projectSubjects = [
    {
      id: "1",
      name: "marketing",
    },
    {
      id: "2",
      name: "photography",
    },
    {
      id: "3",
      name: "writing",
    },
  ];
  return (
    <div className={classes.projects}>
      <section className="banner">
        <h1>Projects</h1>
      </section>

      <section className={classes.subjects}>
        {projectSubjects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              link={project.name}
              name={project.name}
            />
          );
        })}
      </section>
    </div>
  );
};

export default ProjectsPage;
