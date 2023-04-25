import { Button, Divider, Grid, Typography } from "@mui/material";
import TablaFactura from "../Components/Tablas/TablaFactura";
import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export const Facturaprueba = ({ handleClose, row }) => {
  const [numPages, setNumPages] = useState(null);

  const [personaEnvia, setpersonaEnvia] = useState({
    Nombre: row.name,
    Apellido: row.Apellido,
    Telefono: row.telefono,
    Ciudad: row.Ciudad,
    Email: row.Email,
    Direccion: row.direccion,

    Estado: row.Estado,
  });

  const [personaRecibe, setpersonaRecibe] = useState({
    nombre: row.DatosDestinatario[0].Nombre,
    ci: row.DatosDestinatario[0].CarnetIdentidad,
    Telefono: row.DatosDestinatario[0].Telefono,
    Provincia: row.DatosDestinatario[0].Provincia,
    Municipio: row.DatosDestinatario[0].Municipio,
    DNIPasaporte: row.DatosDestinatario[0].DNIPasaporte,
    CarnetIdentidad: row.DatosDestinatario[0].CarnetIdentidad,
    Email: row.DatosDestinatario[0].Email,
    Direccion: row.DatosDestinatario[0].Direccion,
  });

  return (
    <>
      <Document>
        <Page>
          <div name='report' id='report'>
            <Grid
              bgcolor='#ffffff'
              container
              p={3}
              xs={12}
              mt={1}
              display={"flex"}
              justifyContent={"space-around"}
            >
              <Grid
                overflowY='auto'
                item
                xs={6}
                justifyContent={"center"}
                alignContent={"center"}
                display={"flex"}
              >
                <img src={Logo} width={300} height={80} alt='Logo img'></img>
              </Grid>

              <Grid xs={10} mt={3} display='flex' justifyContent={"end"}>
                <Button
                  onClick={handleClose}
                  sx={{
                    backgroundColor: "#f44336",
                    color: "#ffff",
                    ":hover": {
                      backgroundColor: "#1769aa",
                    },
                  }}
                >
                  Cerrar
                </Button>
              </Grid>
              <Grid xs={1} mt={3} mr={5} display='flex' justifyContent={"left"}>
                <Button
                  sx={{
                    backgroundColor: "#64b5f6",
                    color: "#ffff",
                    ":hover": {
                      backgroundColor: "#1769aa",
                    },
                  }}
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </div>
        </Page>
      </Document>
      <PDFDownloadLink
        document={<Document>...</Document>}
        fileName='factura.pdf'
      >
        {({ blob, url, loading, error }) =>
          loading ? "Cargando..." : "Descargar factura"
        }
      </PDFDownloadLink>
    </>
  );
};
