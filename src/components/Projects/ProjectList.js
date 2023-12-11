import { Link, useParams } from "react-router-dom";
import classes from "./ProjectList.module.css";

const ProjectList = () => {
  const params = useParams();

  const PROJECTS = [
    {
      name: "writing",
      projects: [
        { id: "w1", name: "Writing Project 1" },
        { id: "w2", name: "Writing Project 2" },
        { id: "w1", name: "Writing Project 2" },
      ],
    },
  ];

  return (
    <ul>
      {PROJECTS[0].projects.map((project) => {
        return <li>
          <div>
            <Link to={`${project.id}`}>
              <h2>{project.name.toUpperCase()}</h2>
            </Link>
          </div>
        </li>;
      })}
    </ul>
  );
};

export default ProjectList;
