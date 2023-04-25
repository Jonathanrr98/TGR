import React, { useState } from "react";

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider,
} from "@mui/material";

export default function FacturaInfo() {
  const data = [
    {
      bultos: 3,
      peso: 10,
      descripcion: "Producto 1",
      estado: "Pendiente",
      dueno: "Juan Pérez",
      destinatario: "Pedro Gómez",
      volumen: 5,
      costo: 66,
      Remitente: "Remitente 2",
      Tarifa: "800",
      Fecha: "Fecha",
    },

    {
      bultos: 5,
      peso: 13,
      descripcion: "Producto 2",
      estado: "Pendiente",
      dueno: "Pepe Pérez",
      destinatario: "Alberto Gómez",
      volumen: 3,
      costo: 36,
      Remitente: "Remitente 2",
      Tarifa: "800",
      Fecha: "Fecha",
    },
  ];

  const resumen = {
    pesoTotal: 23,
    precioTotal: 102,
    cantidadOrdenes: 2,
    cantidadBultos: 8,
    Fecha: "25-4-2023",
  };

  const [info, setinfo] = useState(data);

  return (
    <Grid container justifyContent={"center"}>
      <Card
        raised
        sx={{
          width: "90%",
        }}
      >
        <CardContent>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignContent: "center",
              alignItems: "center",
              bgcolor: "#eeeeee",
              p: 2,
              borderRadius: 1,
              boxShadow: 1,
            }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant='h5' fontWeight='bold' gutterBottom>
                Agencia
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant='body1' gutterBottom>
                <strong>Peso:</strong> {resumen.pesoTotal}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant='body1' gutterBottom>
                <strong>Importe Total:</strong> {resumen.precioTotal}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant='body1' gutterBottom>
                <strong>Cantidad de Bultos:</strong> {resumen.cantidadBultos}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant='body1' gutterBottom>
                <strong>Cantidad de Órdenes:</strong> {resumen.cantidadOrdenes}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant='body1' gutterBottom>
                <strong>Fecha:</strong> {resumen.Fecha}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>

        {info.map((info) => (
          <CardContent>
            <Grid container direction='column' justify='start' p={2}>
              <Grid item>
                <Typography variant='body1'>
                  <strong>No Bultos :</strong> {info.bultos}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <strong>Remitente:</strong> {info.Remitente}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <strong>Destinatario:</strong> {info.destinatario}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <strong>Descripción :</strong> {info.descripcion}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <strong>Peso (Kg):</strong> {info.peso}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <strong>Costo:</strong> {info.costo}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='body1'>
                  <strong>Tarifa:</strong> {info.Tarifa}
                </Typography>
              </Grid>
            </Grid>
            <Divider />
          </CardContent>
        ))}
      </Card>
    </Grid>
  );
}
