import file from "../assets/project-files/projects.json";

const getProjects = (name) => {
  let category = file.filter((type) => type.name === name);

  return category[0].projects;
};

export default getProjects;
