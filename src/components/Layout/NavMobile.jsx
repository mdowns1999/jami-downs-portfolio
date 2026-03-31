import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NavItems from "./NavItems";

const NavMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: { xs: "block", sm: "none" } }}>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{ color: "white" }}
        aria-label="Open navigation menu"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "primary.main",
            width: 240,
            pt: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            p: 2,
          }}
        >
          <NavItems onClick={() => setOpen(false)} />
        </Box>
      </Drawer>
    </Box>
  );
};

export default NavMobile;
