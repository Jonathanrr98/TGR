import * as React from "react";
import PropTypes from "prop-types";
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
import { useState } from "react";

function createData(
  Bultos,
  Peso,
  Descripcion,
  Estado,
  Dueno,
  Destinatario,
  id
) {
  return {
    Bultos,
    Peso,
    Descripcion,
    Estado,
    Dueno,
    Destinatario,
    id,

    DatosRemitente: [
      {
        Info: "Remitente",
        Nombre: "Pedro",
        Apellido: "Ramos",
        Estado: "Estado 1",
        Ciudad: "Miami",
        Direccion: "Calle 8, FL",
        Email: "correoremitente@gmail.com",
        Telefono: "57678965",
        Pagado: false,
      },
    ],

    DatosDestinatario: [
      {
        Info: "Destinatario",
        Nombre: "Juan",
        Direccion: "Linea y Malecon",
        Provincia: "La Habana",
        Municipio: "Plaza",
        Telefono: "57678965",
        DNIPasaporte: "L2345",
        CarnetIdentidad: "9293765384",
        Correo: "correodestinatario@gmail.com",
      },
    ],
  };
}

function Row({ row, eliminarPorId }) {
  const [open, setOpen] = React.useState(false);

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
          {row.Bultos}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.Peso}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.Descripcion}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='right'
        >
          {row.Estado}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.Dueno}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.Destinatario}
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
                      Información
                    </TableCell>
                    <TableCell sx={{ color: "white", borderColor: "#694D2C" }}>
                      Nombre
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
                      Teléfono
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.DatosDestinatario.map((Destinatario) => (
                    <TableRow key={Destinatario.Email}>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        component='th'
                        scope='row'
                      >
                        {Destinatario.Info}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                      >
                        {Destinatario.Nombre}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {Destinatario.Municipio}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {Destinatario.Telefono}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {Destinatario.DNIPasaporte}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {Destinatario.CarnetIdentidad}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {Destinatario.Email}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>

          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 3 }}>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow sx={{ color: "white", borderColor: "#694D2C" }}>
                    <TableCell sx={{ color: "white", borderColor: "#694D2C" }}>
                      Información
                    </TableCell>
                    <TableCell sx={{ color: "white", borderColor: "#694D2C" }}>
                      Nombre
                    </TableCell>
                    <TableCell
                      sx={{ color: "white", borderColor: "#694D2C" }}
                      align='center'
                    >
                      Apellido
                    </TableCell>
                    <TableCell
                      sx={{ color: "white", borderColor: "#694D2C" }}
                      align='center'
                    >
                      Estado
                    </TableCell>
                    <TableCell
                      sx={{ color: "white", borderColor: "#694D2C" }}
                      align='center'
                    >
                      Ciudad
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
                      Email
                    </TableCell>
                    <TableCell
                      sx={{ color: "white", borderColor: "#694D2C" }}
                      align='center'
                    >
                      Teléfono
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.DatosRemitente.map((Destinatario) => (
                    <TableRow key={Destinatario.Email}>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        component='th'
                        scope='row'
                      >
                        {Destinatario.Info}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                      >
                        {Destinatario.Nombre}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {Destinatario.Apellido}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {Destinatario.Estado}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {Destinatario.Ciudad}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {Destinatario.Direccion}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {Destinatario.Email}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {Destinatario.Telefono}
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

export default function TableHBL() {
  const [rows, setRows] = useState([
    createData(
      "30",
      " 80",
      " Descripción de la mercancía",
      "Estado",
      "Dueño",
      "Destinatario 1",
      1
    ),
    createData(
      "10",
      " 20",
      " Descripción de la mercancía 2",
      "Estado",
      "Dueño 2",
      "Destinatario 2",
      1
    ),
  ]);

  const eliminarPorId = (id) => {
    const nuevasFilas = rows.filter((fila) => fila.id !== id);
    setRows(nuevasFilas);
  };

  return (
    <>
      <TableContainer
        sx={{ backgroundColor: "#252525", borderColor: "#694D2C" }}
        component={Paper}
      >
        <Table sx={{ borderColor: "#694D2C" }} aria-label='collapsible table'>
          <TableHead sx={{ maxHeight: 10, background: "#0F0F0F" }}>
            <TableRow sx={{ borderColor: "#694D2C" }}>
              <TableCell sx={{ borderColor: "#694D2C" }} />
              <TableCell sx={{ borderColor: "#694D2C", color: "white" }}>
                Bultos
              </TableCell>
              <TableCell
                style={{ borderColor: "#694D2C", color: "white" }}
                align='center'
              >
                Peso (Kg)
              </TableCell>
              <TableCell
                sx={{ borderColor: "#694D2C", color: "white" }}
                align='center'
              >
                Descripción
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
                Dueño
              </TableCell>
              <TableCell
                sx={{ borderColor: "#694D2C", color: "white" }}
                align='center'
              >
                Destinatario
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ borderColor: "#694D2C", color: "white" }}>
            {rows.map((row) => (
              <Row
                sx={{ borderColor: "#694D2C", color: "white" }}
                key={row.name}
                row={row}
                eliminarPorId={eliminarPorId}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
