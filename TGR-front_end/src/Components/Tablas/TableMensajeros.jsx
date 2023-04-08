import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import ModalAsignarPaquete from "../Modals/ModalAsignarPaquete";
import ModalMensajero from "../Modals/ModalMensajero";
import ModalEliminarMensajero from "../Modals/ModalEliminarMensajero";
import ModalEditarMensajero from "../Modals/ModalEditarMensajero";
import { useState } from "react";

function createData(
  Nombre,
  CantidadEnvios,
  Matricula,
  Provincia,
  Telefono,
  Movil,
  id
) {
  return {
    Nombre,
    CantidadEnvios,
    Matricula,
    Provincia,
    Telefono,
    Movil,
    id,
  };
}

const arrayOfKeysNamesInOrder = [
  "Nombre",
  "CantidadEnvios",
  "Matricula",
  "Provincia",
  "Telefono",
  "Movil",
];

const columnNames = [
  "Nombre",
  "Cantidad de Envios",
  "Matrícula",
  "Provincia",
  "Teléfono",
  "Móvil",
];

function Row({ row, eliminarPorId, arrayOfKeysNamesInOrder }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset", borderColor: "#694D2C" } }}
      >
        {arrayOfKeysNamesInOrder.map((keyNameForOrder) => (
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
          <ModalEditarMensajero row={row} />
        </TableCell>

        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          <ModalEliminarMensajero row={row} eliminarPorId={eliminarPorId} />
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function TableMensajeros() {
  const [rows, setRows] = useState([
    createData(
      "Pedro Hernandez",
      " 32",
      "P34070",
      "La Habana",
      "78976787",
      "53467676",
      1
    ),
    createData(
      "Juan Gomez",
      " 15",
      "P32232",
      "Holguín",
      "73324787",
      "55767636",
      2
    ),
    createData(
      "Manuel Reina",
      " 27",
      "P0982",
      "Las Tunas",
      "78493787",
      "52367676",
      3
    ),
  ]);

  const eliminarPorId = (id) => {
    const nuevasFilas = rows.filter((fila) => fila.id !== id);
    setRows(nuevasFilas);
  };
  return (
    <>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "flex-end",
        }}
      >
        <ModalAsignarPaquete text={"Asignar Paquetes"} />

        <ModalMensajero text={"Crear Mensajero"} />
      </Grid>
      <TableContainer
        sx={{ backgroundColor: "#252525", borderColor: "#694D2C" }}
        component={Paper}
      >
        <Table sx={{ borderColor: "#694D2C" }} aria-label='collapsible table'>
          <TableHead sx={{ maxHeight: 10, background: "#0F0F0F" }}>
            <TableRow sx={{ borderColor: "#694D2C" }}>
              {columnNames.map((columnName) => (
                <TableCell
                  align='center'
                  sx={{ borderColor: "#694D2C", color: "white" }}
                  key={columnName}
                >
                  {columnName}
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
                key={row.Correo}
                row={row}
                eliminarPorId={eliminarPorId}
                arrayOfKeysNamesInOrder={arrayOfKeysNamesInOrder}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
