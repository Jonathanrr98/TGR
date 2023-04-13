import { Button, Divider, Grid, Typography } from "@mui/material";
import TablaFactura from "../Components/Tablas/TablaFactura";
import React, { useState } from "react";
import Logo from "../assets/Logo.png";

export const Factura = ({ row, handleClose }) => {
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
    <div>
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

        <Grid item xs={6}>
          <Typography>Mily Traveltour Agent - APACARGOEXPRESS</Typography>
          <Typography>Teléfono: (813) 877-5340</Typography>
          <Typography>Email: latinosclothingstore@yahoo.com</Typography>
          <Typography>1761 W Hillsborough Ave, Tampa, FL 33603</Typography>
        </Grid>
        <Grid item xs={12} mt={2} display={"flex"} justifyContent={"center"}>
          <Typography fontSize={19}>
            BL(s): APA2141405085-001, APA2141405086-001, APA2141405087-001,
            APA2141405088-001
          </Typography>
        </Grid>
        <Grid
          container
          mt={3}
          display={"flex"}
          alignContent={"center"}
          justifyContent={"space-around"}
        >
          <Grid item xs={4} justifyContent={"center"} width={30}>
            <Typography color={"#64b5f6"} fontSize={20}>
              Persona que envia
            </Typography>
            <Divider />

            <Typography>Nombre : {personaEnvia.Nombre}</Typography>
            <Typography>Apellido: {personaEnvia.Apellido}</Typography>
            <Typography>Estado: {personaEnvia.Estado}</Typography>
            <Typography>Ciudad: {personaEnvia.Ciudad}</Typography>
            <Typography>Dirección: {personaEnvia.Direccion}</Typography>
            <Typography>Email: {personaEnvia.Email}</Typography>
            <Typography>Teléfono: {personaEnvia.Telefono}</Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography color={"#64b5f6"} fontSize={20}>
              Persona que recibe
            </Typography>
            <Divider />

            <Typography>Nombre y apellidos: {personaRecibe.nombre}</Typography>
            <Typography>Dirección: {personaRecibe.Direccion}</Typography>
            <Typography>Provincia: {personaRecibe.Provincia}</Typography>
            <Typography>Municipio: {personaRecibe.Municipio}</Typography>
            <Typography>Telefono: {personaRecibe.Telefono}</Typography>
            <Typography>
              DNI / Pasaporte: {personaRecibe.DNIPasaporte}
            </Typography>
            <Typography>
              Carnet de Identidad: {personaRecibe.CarnetIdentidad}
            </Typography>
            <Typography>Email: {personaRecibe.Email}</Typography>
          </Grid>
        </Grid>
        <Grid xs={12} mt={3} px={12}>
          <TablaFactura row={row} />
        </Grid>

        <Grid mt={3} p={5} xs={12} justifyContent={"center"}>
          <Typography variant='h6'>Términos y condiciones</Typography>
          <Divider />

          <Typography>
            Con la firma del cliente en la factura el mismo acepta:
            <Typography mt={1}>
              {" "}
              1. LOS ENVIOS SE ENCUENTRAN SUJETOS A DISPONIBILIDAD DE AEROLINEAS
              Y NAVIERAS.{" "}
            </Typography>
            <Typography mt={1}>
              2. APACARGOEXPRESS SE RESERVA EL DERECHO A ELEGIR LA MEJOR OPCION
              PARA DICHOS EMBARQUES CON EL FIN SIEMPRE DE GARANTIZAR UN MEJOR
              SERVICIO AL CLIENTE.
            </Typography>
            <Typography mt={1}>
              3. EL TIEMPO DE ENTREGA ESTA SUJETO A DISPONIBILIDAD DE ENTREGA
              POR PARTE DE CUBA; ASI COMO LOS ESTABLECIMIENTOS DE RECOGIDAS
              ASIGNADOS.
            </Typography>
            <Typography mt={1}>
              {" "}
              4. TUENVIOACUBA.COM/APACARGOEXPRESS NO REALIZARA REEMBOLSOS DE
              DINERO POR DEMORA EN ENTREGA. *debido al COVID-19, PUEDEN EXISTIR
              VARIACIONES EN EL TIEMPO DE ENTREGA.{" "}
            </Typography>
            <Typography mt={1}>
              5. ANTE CUALQUIER PERDIDA DE SU ENVIO,
              TUENVIOACUBA.COM/APACARGOEXPRESS RESPONDERA POR EL MISMO. SOLO
              CUANDO CUBA CONFIRME LA PERDIDA DE ESTE.
            </Typography>
            <Typography mt={1}>
              {" "}
              6. TODAS LAS CARGAS, MENSAJERÍAS Y PAQUETES DESTINADOS AL
              TRANSPORTE EN AERONAVES DE PASAJEROS O DE CARGA, SERÁN OBJETO DE
              CONTROLES DE SEGURIDAD CON LO CUAL PODRÁN SER SOMETIDOS A
              INSPECCIÓN POR LAS AUTORIDADES COMPETENTES, PROVOCANDO EN ALGUNOS
              CASOS DEMORA Y RETRASOS.
            </Typography>
            <Typography mt={1}>
              7. CON MI FIRMA CERTIFICO QUE EL ENVÍO REALIZADO NO ESTÁ VIOLANDO
              LA LEY ADUANAL NI LOS LIMITES COMERCIALES.{" "}
            </Typography>
            <Typography mt={1}>
              8. SOY EL ÚNICO RESPONSABLE DE LA POSIBLE EVASIÓN DE INFORMACIÓN
              DE LO ENVIADO. (EJ. OCULTAR ARTÍCULOS DENTRO DE MIS ENVÍOS).
            </Typography>
          </Typography>

          <Typography variant='h6' mt={3}>
            PROCESAMIENTO Y RECEPCIÓN EN EL ALMACEN:
          </Typography>
          <Typography mt={1}>
            Debido a la situación sanitaria existente a nivel global por el
            Covid 19, se están confrontando demoras inusuales en la recepción,
            procesamiento y entrega de las cargas por parte de las Empresas
            receptoras en destino, así como los itinerarios de Navieras y
            Aerolíneas. Mediante la presente necesitamos confirmarles a nuestros
            clientes los siguientes aspectos:
            <Typography mt={1}>
              {" "}
              1. Los tiempos estimados de entrega de las cargas despachadas les
              serán informados al momento de realizar el despacho. Estos tiempos
              pueden variar por causas ya mas arriba informadas.
            </Typography>
            <Typography mt={1}>
              {" "}
              2. Una vez depositadas las cargas en nuestras instalaciones, estas
              llevan un proceso de preparación, seguridad, inspección, embalaje
              y almacenaje En caso de que el cliente desee retirar sus cargas
              después de ser despachadas, será necesario abonar el costo de
              procesamiento, como sigue:{" "}
              <Typography mt={3}> - Hasta 100 lb $25.00 USD x día </Typography>
              <Typography>- Hasta 500 lb $0.20 / lb x día Mas de</Typography>
              <Typography> - 500 lb $0.15 / lb x día</Typography>
            </Typography>
          </Typography>
          <Typography variant='h6' mt={3}>
            - El cliente con su firma certifica que:
          </Typography>
          <Typography>
            <Typography>
              {" "}
              1. El propósito de este envío es bajo la excepción de licencia GFT
              (gift parcels).
            </Typography>

            <Typography>
              2. El valor del contenido no supera los $800.00.
            </Typography>

            <Typography>
              {" "}
              3. Según lo que se como cliente, el destinatario de este envío no
              es alto miembro del partido cubano, ni miembro del buró político
              del partido comunista de Cuba.
            </Typography>

            <Typography>
              {" "}
              4. Está de acuerdo con los términos y condiciones expuestos en
              este documento.
            </Typography>
          </Typography>
          <Typography></Typography>
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
  );
};
