import blankImage from "../assets/images/blank.png";

const getImage = (imageName) => {
  switch (imageName) {
    case "Poppin Soda":
      return blankImage;
    default:
      return blankImage;
  }
};

export default getImage;
