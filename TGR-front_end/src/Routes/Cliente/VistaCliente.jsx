import * as React from "react";
import { FormGroup, Typography } from "@mui/material";
import { Box } from "@mui/material";
import Logo from "../../assets/Logo.png";

import { Grid, Paper } from "@mui/material";
const data = {
  hbl: "123456",
  bultos: 5,
  peso: 100,
  descripcion: "Caja de productos varios",
  estado: "En tránsito",
  destinatario: "Juan Pérez",
  direccion: "Calle Falsa 123",
  provincia: "Buenos Aires",
  municipio: "La Plata",
  telefono: "555-1234",
  dni: "12345678",
  carnet: "ABC123",
  correo: "juan.perez@example.com",
};

export const Vistacliente = ({}) => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormGroup
        sx={{
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Box sx={{}}>
          <img src={Logo} alt='Logi img' width={400}></img>
        </Box>

        <Typography
          sx={{
            mb: 3,
          }}
          variant='h5'
          color={"#ffff"}
        >
          Restreador
        </Typography>
      </FormGroup>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              backgroundColor: "#252525",
              color: "#fff",
              maxWidth: 400,
              mx: 10,
            }}
            variant='outlined'
          >
            <Grid container direction='column' spacing={2} p={2}>
              <Grid item>
                <Typography variant='h6' align='center'>
                  Mercancía
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <strong>HBL: </strong>
                  {data.hbl}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <strong>Bultos: </strong>
                  {data.bultos}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <strong>Peso en kg: </strong>
                  {data.peso}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <strong>Descripción: </strong>
                  {data.descripcion}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <strong>Estado: </strong>
                  {data.estado}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <strong>Destinatario: </strong>
                  {data.destinatario}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              backgroundColor: "#252525",
              color: "#fff",
              maxWidth: 400,
              mx: 10,
            }}
            variant='outlined'
          >
            <Grid container direction='column' spacing={2} p={2}>
              <Grid item>
                <Typography variant='h6' align='center'>
                  Nombre y Apellido
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <strong>Dirección: </strong>
                  {data.direccion}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <strong>Provincia: </strong>
                  {data.provincia}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <strong>Municipio: </strong>
                  {data.municipio}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <strong>Teléfono: </strong>
                  {data.telefono}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <strong>DNI/Pasaporte: </strong>
                  {data.dni}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <strong>Número de Carnet de Identidad: </strong>
                  {data.carnet}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <strong>Correo Electrónico: </strong>
                  {data.correo}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};
