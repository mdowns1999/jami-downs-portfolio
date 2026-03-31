import Box from "@mui/material/Box";
import NavItems from "./NavItems";

const NavDesktop = () => {
  return (
    <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
      <NavItems />
    </Box>
  );
};

export default NavDesktop;
