import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ModalPago from "../Modals/ModalPago";
import ModalCliente from "../Modals/ModalCliente";
import ModalEliminarCliente from "../Modals/ModalEliminarCliente";
import { ModalEditarCliente } from "../Modals/ModalEditarCliente";
import { useState } from "react";
import ModalFactura from "../Modals/ModalFactura";
import { useContext } from "react";

function createData(
  name,
  Apellido,
  pagado,
  Email,
  telefono,
  direccion,
  Ciudad,
  Estado,

  id
) {
  return {
    name,
    Apellido,
    pagado,
    Email,
    telefono,
    direccion,
    Ciudad,
    Estado,

    id,

    Mercancia: [
      {
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
      },
    ],

    DatosRemitente: [
      {
        Info: "Remitente",
        Nombre: "Datos de Remitente",
        Apellido: "perez",
        Estado: "Ramon Perez",
        Ciudad: "emailejemplo3",
        Direccion: "57678965",
        Email: "La Habana",
        Telefono: "57678965",
      },
    ],

    DatosDestinatario: [
      {
        Info: "Destinatario",
        Nombre: "Pedro Perez",
        Direccion: "Calle 8",
        Provincia: "La Habana",
        Municipio: "Plaza",
        Telefono: "57678965",
        DNIPasaporte: "L2156",
        CarnetIdentidad: "940786724",
        Email: "correo@ejemplo.com",
      },
    ],
  };
}

function Row({ row, eliminarPorId }) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset", borderColor: "#694D2C" } }}
      >
        <TableCell sx={{ borderColor: "#694D2C" }}>
          <IconButton
            sx={{ color: "white", borderColor: "#694D2C" }}
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          component='th'
          scope='row'
        >
          {row.name}
        </TableCell>

        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.Apellido}
        </TableCell>

        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.pagado}
        </TableCell>

        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.Email}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.telefono}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='right'
        >
          {row.direccion}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.Ciudad}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.Estado}
        </TableCell>

        <TableCell
          sx={{
            color: "white",
            borderColor: "#694D2C",
          }}
          align='center'
        >
          <ModalFactura row={row} />
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          <ModalEditarCliente row={row} />
        </TableCell>

        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          <ModalEliminarCliente row={row} eliminarPorId={eliminarPorId} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{
            borderColor: "#694D2C",
            paddingBottom: 0,
            paddingTop: 0,
            color: "white",
          }}
          colSpan={12}
        >
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow sx={{ color: "white", borderColor: "#694D2C" }}>
                    <TableCell sx={{ color: "white", borderColor: "#694D2C" }}>
                      Descripción de Producto
                    </TableCell>
                    <TableCell sx={{ color: "white", borderColor: "#694D2C" }}>
                      Peso (KG)
                    </TableCell>
                    <TableCell
                      sx={{ color: "white", borderColor: "#694D2C" }}
                      align='center'
                    >
                      Contenedor
                    </TableCell>
                    <TableCell
                      sx={{ color: "white", borderColor: "#694D2C" }}
                      align='center'
                    >
                      HBL
                    </TableCell>
                    <TableCell
                      sx={{ color: "white", borderColor: "#694D2C" }}
                      align='center'
                    >
                      Volumen
                    </TableCell>

                    <TableCell
                      sx={{ color: "white", borderColor: "#694D2C" }}
                      align='center'
                    >
                      Pago
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.Mercancia.map((historyRow) => (
                    <TableRow key={historyRow.dni_pasaporte}>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        component='th'
                        scope='row'
                      >
                        {historyRow.historial}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                      >
                        {historyRow.Peso}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {historyRow.contenedor}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {historyRow.HBL}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {historyRow.Volumen}
                      </TableCell>

                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {historyRow.pago === false ? (
                          <Typography
                            disableElevation
                            sx={{
                              height: 20,
                              color: "#4caf50",
                            }}
                          >
                            Pagado
                          </Typography>
                        ) : (
                          <ModalPago text={"Pagar"} />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>

          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 2 }}>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow sx={{ color: "white", borderColor: "#694D2C" }}>
                    <TableCell sx={{ color: "white", borderColor: "#694D2C" }}>
                      Destinatario:
                    </TableCell>
                    <TableCell sx={{ color: "white", borderColor: "#694D2C" }}>
                      Nombre
                    </TableCell>
                    <TableCell
                      sx={{ color: "white", borderColor: "#694D2C" }}
                      align='center'
                    >
                      Dirección
                    </TableCell>
                    <TableCell
                      sx={{ color: "white", borderColor: "#694D2C" }}
                      align='center'
                    >
                      Provincia
                    </TableCell>
                    <TableCell
                      sx={{ color: "white", borderColor: "#694D2C" }}
                      align='center'
                    >
                      Municipio
                    </TableCell>
                    <TableCell
                      sx={{ color: "white", borderColor: "#694D2C" }}
                      align='center'
                    >
                      Telefono
                    </TableCell>
                    <TableCell
                      sx={{ color: "white", borderColor: "#694D2C" }}
                      align='center'
                    >
                      DNI / Pasaporte
                    </TableCell>
                    <TableCell
                      sx={{ color: "white", borderColor: "#694D2C" }}
                      align='center'
                    >
                      Carnet de Identidad
                    </TableCell>
                    <TableCell
                      sx={{ color: "white", borderColor: "#694D2C" }}
                      align='center'
                    >
                      Email
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.DatosDestinatario.map((historyRow) => (
                    <TableRow key={historyRow.dni_pasaporte}>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        component='th'
                        scope='row'
                      ></TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                      >
                        {historyRow.Nombre}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {historyRow.Direccion}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {historyRow.Provincia}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {historyRow.Municipio}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {historyRow.Telefono}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {historyRow.DNIPasaporte}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {historyRow.CarnetIdentidad}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {historyRow.Email}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export const RowsContext = React.createContext();

export default function TableClient() {
  const [rows, setRows] = useState([
    createData(
      "Juan",
      " Perez",
      " si",
      " mail@asd.com",
      "+" + 18983589139,
      "98, Ave 3ra e/ 4ta Miami Fl",
      "La Habana",
      "En Cuba",
      1
    ),

    createData(
      "Pepe",
      " sanchez",
      " si",
      " mail33@asd.com",
      "+" + 13383589139,
      "calle 5, Ave 3ra e/ 4ta Miami Fl",
      "Las Tunas",
      "En Miami",
      2
    ),
  ]);

  const eliminarPorId = (id) => {
    const nuevasFilas = rows.filter((fila) => fila.id !== id);
    setRows(nuevasFilas);
  };
  return (
    <>
      <RowsContext.Provider value={rows}>
        <ModalCliente text={"Crear Cliente"} />

        <TableContainer
          sx={{
            backgroundColor: "#252525",
            borderColor: "#694D2C",
          }}
          component={Paper}
        >
          <Table sx={{ borderColor: "#694D2C" }} aria-label='collapsible table'>
            <TableHead sx={{ maxHeight: 10, background: "#0F0F0F" }}>
              <TableRow sx={{ borderColor: "#694D2C" }}>
                <TableCell sx={{ borderColor: "#694D2C" }} />
                <TableCell sx={{ borderColor: "#694D2C", color: "white" }}>
                  Nombre
                </TableCell>
                <TableCell
                  sx={{ borderColor: "#694D2C", color: "white" }}
                  align='center'
                >
                  Apellido
                </TableCell>
                <TableCell
                  style={{ borderColor: "#694D2C", color: "white" }}
                  align='center'
                >
                  Pagado
                </TableCell>
                <TableCell
                  sx={{ borderColor: "#694D2C", color: "white" }}
                  align='center'
                >
                  Email
                </TableCell>
                <TableCell
                  sx={{ borderColor: "#694D2C", color: "white" }}
                  align='center'
                >
                  Teléfono
                </TableCell>
                <TableCell
                  sx={{ borderColor: "#694D2C", color: "white" }}
                  align='center'
                >
                  Dirección
                </TableCell>
                <TableCell
                  sx={{ borderColor: "#694D2C", color: "white" }}
                  align='center'
                >
                  Ciudad
                </TableCell>
                <TableCell
                  sx={{ borderColor: "#694D2C", color: "white" }}
                  align='center'
                >
                  Estado
                </TableCell>
                <TableCell
                  sx={{ borderColor: "#694D2C", color: "white" }}
                  align='center'
                >
                  Factura
                </TableCell>

                <TableCell
                  sx={{ borderColor: "#694D2C", color: "white" }}
                  align='center'
                >
                  Editar
                </TableCell>

                <TableCell
                  sx={{ borderColor: "#694D2C", color: "white" }}
                  align='center'
                >
                  Eliminar
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ borderColor: "#694D2C", color: "white" }}>
              {rows.map((row) => (
                <Row
                  sx={{ borderColor: "#694D2C", color: "white" }}
                  key={row.id}
                  row={row}
                  eliminarPorId={eliminarPorId}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </RowsContext.Provider>
    </>
  );
}
