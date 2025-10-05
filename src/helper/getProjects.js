//import file from "../assets/project-files/projects.json";
import photoProjects from "../assets/project-files/photo.json";
import writingProjects from "../assets/project-files/writing.json";
import marketingProjects from "../assets/project-files/market.json";

const getProjects = (name) => {
  if (name === "writing") {
    return writingProjects[0].projects;
  } else if (name === "marketing") {
    return marketingProjects[0].projects;
  } else if (name === "photography") {
    return photoProjects[0].projects;
  }
};

export default getProjects;
