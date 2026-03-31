import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import logo from "../../assets/images/jamiLogo.png";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link to="/" style={{ lineHeight: 0 }}>
          <Box
            component="img"
            src={logo}
            alt="Jami Downs Portfolio Logo"
            sx={{ width: 125 }}
          />
        </Link>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <NavDesktop />
          <NavMobile />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
