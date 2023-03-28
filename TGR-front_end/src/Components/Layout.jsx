import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

const Layout = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          mt: 20,
        }}
      >
        <main>{children}</main>
      </Box>
    </>
  );
};

export default Layout;
