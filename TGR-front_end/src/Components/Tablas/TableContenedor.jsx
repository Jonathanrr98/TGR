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
import ModalFormContenedores from "../Modals/ModalFormContenedores";
import ModalEliminarContenedor from "../Modals/ModalEliminarContenedor";
import { ModalEditarContenedores } from "../Modals/ModalEditarContenedores";
import { useState } from "react";
import {
  columnNamesContenedor,
  columnNamesContenedorMercancia,
} from "../../Data/ColumnNames";

import {
  arrayOfKeysNamesInOrderContenedor,
  arrayOfKeysNamesInOrderContenedorMercancia,
} from "../../Data/RowOrganizers";
function createData(
  Contenedor,
  CanidadPaquetes,
  Peso,
  EstadoGeneral,
  Numero,
  id,
  Manifiesto
) {
  return {
    Contenedor,
    CanidadPaquetes,
    Peso,
    EstadoGeneral,
    Numero,
    id,
    Manifiesto,

    history: [
      {
        Paquetes: "Cortina",
        Pesokg: "22",
        Contenedor: "KL6764",
        HBL: "30804548255",
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
        {arrayOfKeysNamesInOrderContenedor.map((keyNameForOrder) => (
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
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          <ModalEditarContenedores row={row} />
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          <ModalEliminarContenedor row={row} eliminarPorId={eliminarPorId} />
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
          colSpan={6}
        >
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow sx={{ color: "white", borderColor: "#694D2C" }}>
                    {columnNamesContenedorMercancia.map(
                      (columnNamesContenedorMercancia) => (
                        <TableCell
                          align='center'
                          sx={{ borderColor: "#694D2C", color: "white" }}
                          key={columnNamesContenedorMercancia}
                        >
                          {columnNamesContenedorMercancia}
                        </TableCell>
                      )
                    )}
                    <TableCell
                      sx={{ color: "white", borderColor: "#694D2C" }}
                      align='center'
                    ></TableCell>
                    <TableCell
                      sx={{ color: "white", borderColor: "#694D2C" }}
                      align='center'
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.HBL}>
                      {arrayOfKeysNamesInOrderContenedorMercancia.map(
                        (keyNameForOrder) => (
                          <TableCell
                            align='center'
                            sx={{
                              color: "white",
                              borderColor: "#694D2C",
                            }}
                            component='th'
                            scope='row'
                          >
                            {historyRow[keyNameForOrder]}
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

export default function TableContenedor() {
  const [rows, setRows] = useState([
    createData(
      "60",
      "550",
      " 220",
      "Rumbo habana-Dominicana_Florida",
      "24120",
      2,
      "Manifiesto2"
    ),
    createData(
      45,
      " 550",
      " 220",
      "Rumbo habana-Dominicana_Florida",
      "2464",
      2,
      "Manifiesto1"
    ),
    createData(
      33,
      " 550",
      " 220",
      "Rumbo habana-Dominicana_Florida",
      "2415",
      5,
      "Manifiesto5"
    ),
  ]);

  const eliminarPorId = (id) => {
    const nuevasFilas = rows.filter((fila) => fila.id !== id);
    setRows(nuevasFilas);
  };
  return (
    <>
      <ModalFormContenedores text={"Crear Contenedor"} />
      <TableContainer
        sx={{ backgroundColor: "#252525", borderColor: "#694D2C" }}
        component={Paper}
      >
        <Table sx={{ borderColor: "#694D2C" }} aria-label='collapsible table'>
          <TableHead sx={{ maxHeight: 10, background: "#0F0F0F" }}>
            <TableRow sx={{ borderColor: "#694D2C" }}>
              <TableCell
                sx={{ color: "white", borderColor: "#694D2C" }}
                component='th'
                scope='row'
              ></TableCell>
              {columnNamesContenedor.map((columnNamesContenedor) => (
                <TableCell
                  align='center'
                  sx={{ borderColor: "#694D2C", color: "white" }}
                  key={columnNamesContenedor}
                >
                  {columnNamesContenedor}
                </TableCell>
              ))}

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
                key={row.Contenedor}
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
