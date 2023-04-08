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
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import {
  columnNamesHBL,
  columnNamesHBLDestinatario,
  columnNamesHBLRemitente,
} from "../../Data/ColumnNames";

import {
  arrayOfKeysNamesInOrderHBL,
  arrayOfKeysNamesInOrderHBLDestinatario,
  arrayOfKeysNamesInOrderHBLRemitente,
} from "../../Data/RowOrganizers";

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

function Row({
  row,
  eliminarPorId,
  arrayOfKeysNamesInOrderRemitente,
  columnNamesRemitente,
  arrayOfKeysNamesInOrderDestinatario,
  columnNamesDestinatario,
}) {
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
        {arrayOfKeysNamesInOrderHBL.map((keyNameForOrder) => (
          <TableCell
            align='center'
            sx={{
              color: "white",
              borderColor: "#694D2C",
            }}
            component='th'
            scope='row'
          >
            {row[keyNameForOrder]}
          </TableCell>
        ))}
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
                    {columnNamesHBLDestinatario.map(
                      (columnNamesHBLDestinatario) => (
                        <TableCell
                          align='center'
                          sx={{ borderColor: "#694D2C", color: "white" }}
                          key={columnNamesHBLDestinatario}
                        >
                          {columnNamesHBLDestinatario}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.DatosDestinatario.map((historyRow) => (
                    <TableRow key={historyRow.HBL}>
                      {arrayOfKeysNamesInOrderHBLDestinatario.map(
                        (arrayOfKeysNamesInOrderHBLDestinatario) => (
                          <TableCell
                            align='center'
                            sx={{
                              color: "white",
                              borderColor: "#694D2C",
                            }}
                            component='th'
                            scope='row'
                          >
                            {historyRow[arrayOfKeysNamesInOrderHBLDestinatario]}
                          </TableCell>
                        )
                      )}
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
                    {columnNamesHBLRemitente.map((columnNamesHBLRemitente) => (
                      <TableCell
                        align='center'
                        sx={{ borderColor: "#694D2C", color: "white" }}
                        key={columnNamesHBLRemitente}
                      >
                        {columnNamesHBLRemitente}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.DatosRemitente.map((historyRow) => (
                    <TableRow key={historyRow.HBL}>
                      {arrayOfKeysNamesInOrderHBLRemitente.map(
                        (arrayOfKeysNamesInOrderHBLRemitente) => (
                          <TableCell
                            align='center'
                            sx={{
                              color: "white",
                              borderColor: "#694D2C",
                            }}
                            component='th'
                            scope='row'
                          >
                            {historyRow[arrayOfKeysNamesInOrderHBLRemitente]}
                          </TableCell>
                        )
                      )}
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
              <TableCell
                align='center'
                sx={{ borderColor: "#694D2C", color: "white" }}
              ></TableCell>
              {columnNamesHBL.map((columnNamesHBL) => (
                <TableCell
                  align='center'
                  sx={{ borderColor: "#694D2C", color: "white" }}
                  key={columnNamesHBL}
                >
                  {columnNamesHBL}
                </TableCell>
              ))}
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
