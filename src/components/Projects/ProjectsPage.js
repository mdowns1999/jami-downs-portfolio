import classes from "./ProjectsPage.module.css";
import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {
  let projectSubjects = [
    {
      id: "1",
      name: "photography",
    },
    {
      id: "2",
      name: "writing",
    },
    {
      id: "3",
      name: "marketing",
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
