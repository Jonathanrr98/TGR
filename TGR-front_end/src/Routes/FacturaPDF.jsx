import React from "react";
import {
  Page,
  View,
  Document,
  StyleSheet,
  Image,
  Text,
  PDFViewer,
} from "@react-pdf/renderer";

import Logo from "../assets/Logo.png";

const styles = StyleSheet.create({
  body: {
    padding: 5,
    margin: 0,
    padding: 40,
  },
  view: {
    width: "auto",
    display: "flex",
  },
  title: {
    fontSize: 12,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    fontSize: 10,
    lineHeight: 1.5,
  },
  image: {
    width: "60%",
    height: "auto",
  },

  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "16.6%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
});

const FacturaPDF = () => {
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

  const Mercancia = {
    HBL: "30804548255",
    historial: "cortina",
    Bultos: 56,
    Peso: "100",
    Descripcion: "Descripción mercancía",
    Estado: "En Cuba",
    Dueno: "Pepe",
    contenedor: "k8234kl",
    Volumen: "15m*",
    Destinatario: "juan",

    Pago: true,
  };

  return (
    <Document style={styles.body}>
      <Page style={styles.body}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            padding: 9,
            margin: 5,
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <Image style={styles.image} src={Logo} />
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <Text style={styles.text}>
              Mily Traveltour Agent - APACARGOEXPRESS
            </Text>
            <Text style={styles.text}>Teléfono: 813 877-5340</Text>
            <Text style={styles.text}>
              Email: latinosclothingstore@yahoo.com
            </Text>
            <Text style={styles.text}>
              1761 W Hillsborough Ave, Tampa, FL 33603
            </Text>
          </View>
        </View>
        <Text style={styles.subtitle}>
          BLs: APA2141405085-001, APA2141405086-001,
          APA2141405087-001,APA2141405088-001
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            padding: 9,
            margin: 5,
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <Text style={styles.subtitle}>Persona que envia</Text>

            <Text style={styles.text}>Nombre : {senderInfo.name}</Text>
            <Text style={styles.text}>Apellido: {senderInfo.surname}</Text>
            <Text style={styles.text}>Estado: {senderInfo.state}</Text>
            <Text style={styles.text}>Ciudad: {senderInfo.city}</Text>
            <Text style={styles.text}>Dirección: {senderInfo.address}</Text>
            <Text style={styles.text}>Email: {senderInfo.email}</Text>
            <Text style={styles.text}>Teléfono: {senderInfo.phone}</Text>
          </View>

          <View
            style={{
              flex: 1,
            }}
          >
            <Text style={styles.subtitle}>Persona que recibe</Text>

            <Text style={styles.text}>
              Nombre y apellidos: {receiverInfo.name}
            </Text>
            <Text style={styles.text}>Dirección: {receiverInfo.address}</Text>
            <Text style={styles.text}>Provincia: {receiverInfo.province}</Text>
            <Text style={styles.text}>
              Municipio: {receiverInfo.municipality}
            </Text>
            <Text style={styles.text}>Telefono: {receiverInfo.phone}</Text>
            <Text style={styles.text}>DNI / Pasaporte: {receiverInfo.dni}</Text>
            <Text style={styles.text}>
              Carnet de Identidad: {receiverInfo.ci}
            </Text>
            <Text style={styles.text}>Email: {receiverInfo.email}</Text>
          </View>
        </View>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Producto</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Bulto</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Peso</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Estado</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Dueño</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Destinatario</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{Mercancia.Descripcion}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{Mercancia.Bultos} </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{Mercancia.Peso}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{Mercancia.Estado}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{Mercancia.Dueno}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{Mercancia.Destinatario}</Text>
            </View>
          </View>
        </View>
      </Page>
      <Page style={styles.body}>
        <Text style={styles.subtitle}>Términos y Condiciones</Text>
        <Text style={styles.text}>
          Con la firma del cliente en la factura el mismo acepta:
        </Text>
        <Text style={styles.text}>
          1. Los envíos se encuentran sujetos a disponibilidad de aerolíneas y
          navieras.
        </Text>
        <Text style={styles.text}>
          2. Apacargoexpress se reserva el derecho a elegir la mejor opción para
          dichos embarques con el fin siempre de garantizar un mejor servicio al
          cliente.
        </Text>
        <Text style={styles.text}>
          3. El tiempo de entrega está sujeto a disponibilidad de entrega por
          parte de Cuba; así como los establecimientos de recogidas asignados.
        </Text>
        <Text style={styles.text}>
          4. Tuenvioacuba.com/apacargoexpress no realizará reembolsos de dinero
          por demora en entrega. *Debido al COVID-19, pueden existir variaciones
          en el tiempo de entrega.
        </Text>
        <Text style={styles.text}>
          5. Ante cualquier pérdida de su envío,
          tuenvioacuba.com/apacargoexpress responderá por el mismo. Solo cuando
          Cuba confirme la pérdida de este.
        </Text>
        <Text style={styles.text}>
          6. Todas las cargas, mensajerías y paquetes destinados al transporte
          en aeronaves de pasajeros o de carga, serán objeto de controles de
          seguridad con lo cual podrán ser sometidos a inspección por las
          autoridades competentes, provocando en algunos casos demora y
          retrasos.
        </Text>
        <Text style={styles.text}>
          7. Con mi firma certifico que el envío realizado no está violando la
          ley aduanal ni los límites comerciales.
        </Text>
        <Text style={styles.text}>
          8. Soy el único responsable de la posible evasión de información de lo
          enviado. (Ej. ocultar artículos dentro de mis envíos).
        </Text>
        <Text style={styles.subtitle}>
          Procesamiento y recepción en el almacen:
        </Text>
        <View>
          <Text style={styles.text}>
            Debido a la situación sanitaria existente a nivel global por el
            Covid 19, se están confrontando demoras inusuales en la recepción,
            procesamiento y entrega de las cargas por parte de las Empresas
            receptoras en destino, así como los itinerarios de Navieras y
            Aerolíneas. Mediante la presente necesitamos confirmarles a nuestros
            clientes los siguientes aspectos:
            <Text style={styles.text}>
              1. Los tiempos estimados de entrega de las cargas despachadas les
              serán informados al momento de realizar el despacho. Estos tiempos
              pueden variar por causas ya mas arriba informadas.
            </Text>
            <Text style={styles.text}>
              2. Una vez depositadas las cargas en nuestras instalaciones, estas
              llevan un proceso de preparación, seguridad, inspección, embalaje
              y almacenaje En caso de que el cliente desee retirar sus cargas
              después de ser despachadas, será necesario abonar el costo de
              procesamiento, como sigue:{" "}
              <Text style={styles.text}> - Hasta 100 lb $25.00 USD x día </Text>
              <Text style={styles.text}>
                - Hasta 500 lb $0.20 / lb x día Mas de
              </Text>
              <Text style={styles.text}> - 500 lb $0.15 / lb x día</Text>
            </Text>
          </Text>
        </View>
        <Text style={styles.subtitle}>
          El cliente con su firma certifica que:
        </Text>
        <View>
          <Text style={styles.text}>
            <Text style={styles.text}>
              1. El propósito de este envío es bajo la excepción de licencia GFT
              (gift parcels).
            </Text>

            <Text style={styles.text}>
              2. El valor del contenido no supera los $800.00.
            </Text>

            <Text style={styles.text}>
              3. Según lo que se como cliente, el destinatario de este envío no
              es alto miembro del partido cubano, ni miembro del buró político
              del partido comunista de Cuba.
            </Text>

            <Text style={styles.text}>
              4. Está de acuerdo con los términos y condiciones expuestos en
              este documento.
            </Text>
          </Text>
        </View>
      </Page>
    </Document>
  );
};
export default FacturaPDF;
