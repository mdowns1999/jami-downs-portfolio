import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Footer from "./Footer";
import Header from "./Header";

function RootLayout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <Suspense fallback={<LinearProgress color="secondary" />}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
    </Box>
  );
}

export default RootLayout;
