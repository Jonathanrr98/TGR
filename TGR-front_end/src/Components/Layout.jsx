import * as React from "react";

import { Container } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <Container
        sx={{
          mt: 2,
        }}
      >
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
