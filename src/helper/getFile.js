import opt from "../assets/files/RBOpt.pdf";
import about from "../assets/files/RBAbout.pdf";
import news from "../assets/files/RBNews.pdf";
import SR from "../assets/files/SRRecreate.pdf";

const getFile = (id) => {
  if (id === "m3") {
    return opt;
  } else if (id === "m4") {
    return about;
  } else if (id === "m5") {
    return news;
  } else if (id === "m6") {
    return SR;
  }
};

export default getFile;
