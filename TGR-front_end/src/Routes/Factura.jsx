import React, { useState } from "react";
import ReactPDF, { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Button, Divider, Grid, Typography } from "@mui/material";
import FacturaPDF from "./FacturaPDF";
import Logo from "../assets/Logo.png";
import { StyleSheet } from "@react-pdf/renderer";
import TablaFactura from "../Components/Tablas/TablaFactura";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },

  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
});

export const Factura = ({ row, handleClose }) => {
  const [verPDF, setVerPDF] = React.useState(false);

  const senderInfo = {
    name: "Pepe",
    surname: "Alonso",
    state: "En camino",
    city: "Miami",
    address: "calle 89",
    phone: "78278737",
    email: "pepe.alonso@example.com",
  };

  const receiverInfo = {
    name: "Juan Perez",
    address: "Calle 8 FL",
    province: "Habana",
    municipality: "Lisa",
    phone: "54278737",
    dni: "L1238",
    ci: "9098776543",
    email: "juan.perez@example.com",
  };

  const Menu = () => (
    <nav
      style={{
        display: "flex",
        borderBottom: "1px solid black",
        paddingBottom: "5px",
        justifyContent: "space-around",
      }}
    >
      <PDFDownloadLink document={<FacturaPDF />} fileName='factura.pdf'>
        <Button variant='contained'>Descargar PDF</Button>
      </PDFDownloadLink>
    </nav>
  );

  return (
    <Grid>
      <Menu />

      {verPDF ? (
        <PDFViewer style={{ minWidth: "200vh", width: "100%", height: "90vh" }}>
          <FacturaPDF />
        </PDFViewer>
      ) : (
        <Grid>
          <Grid>
            <Grid container justifyContent={"space-between"} px={5}>
              <Grid>
                <img src={Logo} width={300} height={80} alt='Logo img'></img>
              </Grid>

              <Grid>
                <Typography style={styles.text}>
                  Mily Traveltour Agent - APACARGOEXPRESS
                </Typography>
                <Typography style={styles.text}>
                  Teléfono: 813 877-5340
                </Typography>
                <Typography style={styles.text}>
                  Email: latinosclothingstore@yahoo.com
                </Typography>
                <Typography style={styles.text}>
                  1761 W Hillsborough Ave, Tampa, FL 33603
                </Typography>
              </Grid>
            </Grid>

            <Typography style={styles.text}>
              BLs: APA2141405085-001, APA2141405086-001,
              APA2141405087-001,APA2141405088-001
            </Typography>

            <Grid container justifyContent={"space-between"} my={5}>
              <Grid item xs={4} justifyContent={"center"}>
                <Typography color={"#64b5f6"} fontSize={20}>
                  Persona que envia
                </Typography>
                <Divider />

                <Typography>Nombre : {senderInfo.name}</Typography>
                <Typography>Apellido: {senderInfo.surname}</Typography>
                <Typography>Estado: {senderInfo.state}</Typography>
                <Typography>Ciudad: {senderInfo.city}</Typography>
                <Typography>Dirección: {senderInfo.address}</Typography>
                <Typography>Email: {senderInfo.email}</Typography>
                <Typography>Teléfono: {senderInfo.phone}</Typography>
              </Grid>

              <Grid item xs={4} justifyContent={"center"}>
                <Typography color={"#64b5f6"} fontSize={20}>
                  Persona que recibe
                </Typography>
                <Divider />

                <Typography>Nombre y apellidos: {receiverInfo.name}</Typography>
                <Typography>Dirección: {receiverInfo.address}</Typography>
                <Typography>Provincia: {receiverInfo.province}</Typography>
                <Typography>Municipio: {receiverInfo.municipality}</Typography>
                <Typography>Telefono: {receiverInfo.phone}</Typography>
                <Typography>DNI / Pasaporte: {receiverInfo.dni}</Typography>
                <Typography>Carnet de Identidad: {receiverInfo.ci}</Typography>
                <Typography>Email: {receiverInfo.email}</Typography>
              </Grid>
            </Grid>

            <Grid xs={12} sx={{ padding: 5, mb: 40 }}>
              {" "}
              <TablaFactura row={row} />
            </Grid>

            <Typography variant='h6' style={styles.subtitle}>
              Términos y Condiciones
            </Typography>
            <Divider />
            <Typography p={3}>
              Con la firma del cliente en la factura el mismo acepta:
              <Typography mt={1}>
                1. Los envíos se encuentran sujetos a disponibilidad de
                aerolíneas y navieras.
              </Typography>
              <Typography mt={1}>
                2. Apacargoexpress se reserva el derecho a elegir la mejor
                opción para dichos embarques con el fin siempre de garantizar un
                mejor servicio al cliente.
              </Typography>
              <Typography mt={1}>
                3. El tiempo de entrega está sujeto a disponibilidad de entrega
                por parte de Cuba; así como los establecimientos de recogidas
                asignados.
              </Typography>
              <Typography mt={1}>
                4. Tuenvioacuba.com/apacargoexpress no realizará reembolsos de
                dinero por demora en entrega. *Debido al COVID-19, pueden
                existir variaciones en el tiempo de entrega.
              </Typography>
              <Typography mt={1}>
                5. Ante cualquier pérdida de su envío,
                tuenvioacuba.com/apacargoexpress responderá por el mismo. Solo
                cuando Cuba confirme la pérdida de este.
              </Typography>
              <Typography mt={1}>
                6. Todas las cargas, mensajerías y paquetes destinados al
                transporte en aeronaves de pasajeros o de carga, serán objeto de
                controles de seguridad con lo cual podrán ser sometidos a
                inspección por las autoridades competentes, provocando en
                algunos casos demora y retrasos.
              </Typography>
              <Typography mt={1}>
                7. Con mi firma certifico que el envío realizado no está
                violando la ley aduanal ni los límites comerciales.
              </Typography>
              <Typography mt={1}>
                8. Soy el único responsable de la posible evasión de información
                de lo enviado. (Ej. ocultar artículos dentro de mis envíos).
              </Typography>
            </Typography>

            <Typography variant='h6' mt={3}>
              Procesamiento y recepción en el almacen:
            </Typography>
            <Divider />
            <Grid p={3}>
              <Typography mt={1}>
                Debido a la situación sanitaria existente a nivel global por el
                Covid 19, se están confrontando demoras inusuales en la
                recepción, procesamiento y entrega de las cargas por parte de
                las Empresas receptoras en destino, así como los itinerarios de
                Navieras y Aerolíneas. Mediante la presente necesitamos
                confirmarles a nuestros clientes los siguientes aspectos:
                <Typography mt={1}>
                  {" "}
                  1. Los tiempos estimados de entrega de las cargas despachadas
                  les serán informados al momento de realizar el despacho. Estos
                  tiempos pueden variar por causas ya mas arriba informadas.
                </Typography>
                <Typography mt={1}>
                  {" "}
                  2. Una vez depositadas las cargas en nuestras instalaciones,
                  estas llevan un proceso de preparación, seguridad, inspección,
                  embalaje y almacenaje En caso de que el cliente desee retirar
                  sus cargas después de ser despachadas, será necesario abonar
                  el costo de procesamiento, como sigue:{" "}
                  <Typography mt={3}>
                    {" "}
                    - Hasta 100 lb $25.00 USD x día{" "}
                  </Typography>
                  <Typography>
                    - Hasta 500 lb $0.20 / lb x día Mas de
                  </Typography>
                  <Typography> - 500 lb $0.15 / lb x día</Typography>
                </Typography>
              </Typography>
            </Grid>
            <Typography variant='h6' mt={3}>
              El cliente con su firma certifica que:
            </Typography>
            <Divider />
            <Grid p={3}>
              <Typography>
                <Typography>
                  {" "}
                  1. El propósito de este envío es bajo la excepción de licencia
                  GFT (gift parcels).
                </Typography>

                <Typography>
                  2. El valor del contenido no supera los $800.00.
                </Typography>

                <Typography>
                  {" "}
                  3. Según lo que se como cliente, el destinatario de este envío
                  no es alto miembro del partido cubano, ni miembro del buró
                  político del partido comunista de Cuba.
                </Typography>

                <Typography>
                  {" "}
                  4. Está de acuerdo con los términos y condiciones expuestos en
                  este documento.
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      )}

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
    </Grid>
  );
};
