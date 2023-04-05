import * as React from "react";
import Layout from "../../Components/Layout";
import Boton from "../../Components/Boton";
import { Grid } from "@mui/material";

export const Manifiesto = () => {
  return (
    <>
      <Layout>
        <Grid display={"flex"} justifyContent={"center"}>
          <Boton
            text={"Crear Manifiesto"}
            colorFondo={"#CF7A17"}
            colorLetra={"#ffff"}
          ></Boton>
        </Grid>
      </Layout>
    </>
  );
};

export default Manifiesto;
