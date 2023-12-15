const getImage = (imageName) => {
  switch (imageName) {
    case "Poppin Soda":
      return require("../assets/images/blank.png");
    default:
      return require("../assets/images/blank.png");
  }
};

export default getImage;
