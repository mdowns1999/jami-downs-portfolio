import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import MuiButton from "@mui/material/Button";

const navLinkStyle = (isActive) => ({
  color: isActive ? "#f7d497" : "white",
  textTransform: "none",
  fontFamily: '"Lato", sans-serif',
  fontWeight: 400,
  fontSize: "1rem",
  minWidth: 0,
  px: 1.5,
  "&:hover": {
    backgroundColor: "primary.light",
    borderRadius: 2,
  },
});

const springTransition = (delay) => ({
  type: "spring",
  stiffness: 260,
  damping: 20,
  delay,
});

const NavItems = ({ onClick }) => {
  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={springTransition(0.1)}
        onClick={onClick}
      >
        <NavLink to="/" end>
          {({ isActive }) => (
            <MuiButton sx={navLinkStyle(isActive)}>Home</MuiButton>
          )}
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={springTransition(0.2)}
        onClick={onClick}
      >
        <NavLink to="about">
          {({ isActive }) => (
            <MuiButton sx={navLinkStyle(isActive)}>About</MuiButton>
          )}
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={springTransition(0.3)}
        onClick={onClick}
      >
        <NavLink to="projects">
          {({ isActive }) => (
            <MuiButton sx={navLinkStyle(isActive)}>Projects</MuiButton>
          )}
        </NavLink>
      </motion.div>
    </>
  );
};

NavItems.propTypes = {
  onClick: PropTypes.func,
};

export default NavItems;
