import { Button, Container, Grid } from "@mui/material";
import React from "react";

export const Boton = ({ text, colorFondo, colorLetra }) => {
  return (
    <>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            backgroundColor: colorFondo,
            color: colorLetra,
            borderRadius: "24px",
            m: 1,
            px: 2,

            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          {" "}
          {text}{" "}
        </Button>
      </Grid>
    </>
  );
};

export default Boton;
