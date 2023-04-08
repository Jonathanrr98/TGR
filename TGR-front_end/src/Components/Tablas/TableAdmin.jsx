import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ModalAdmin from "../Modals/ModalAdmin";
import { ModalEditarAdmin } from "../Modals/ModalEditarAdmin";
import ModalEliminarAdministrador from "../Modals/ModalEliminarAdministrador";
import { useState } from "react";

// Definimos la función que crea las filas
function createData(
  email,
  password,
  JWT,
  typeOfPermission,
  recoverPassword,
  id
) {
  return {
    email,
    password,
    JWT,
    typeOfPermission,
    recoverPassword,
    id,
  };
}

const arrayOfKeysNamesInOrder = [
  "email",
  "password",
  "JWT",
  "typeOfPermission",
  "recoverPassword",
];

const columnNames = [
  "Correo",
  "Contraseña",
  "JWT",
  "Tipo de Permiso",
  "Recuperar Contraseña",
];

// Definimos la función que renderiza cada fila
function Row({ row, eliminarPorId, arrayOfKeysNamesInOrder }) {
  return (
    <>
      <TableRow
        sx={{
          "& > *": {
            borderBottom: "unset",
            borderColor: "#694D2C",
          },
        }}
        key={row.id}
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
          <ModalEditarAdmin row={row} />
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          <ModalEliminarAdministrador row={row} eliminarPorId={eliminarPorId} />
        </TableCell>
      </TableRow>
    </>
  );
}

export default function TableAdmin() {
  const [rows, setRows] = useState([
    createData(
      "correo1@gmail.com",
      "pass",
      "jwt+++",
      "administrador1",
      "Recuperar Contraseña",
      1
    ),
    createData(
      "correo2@gmail.com",
      "pass",
      "jwt+++",
      "administrador2",
      "Recuperar Contraseña",
      2
    ),
    createData(
      "correo3@gmail.com",
      "pass",
      "jwt+++",
      "administrador3",
      "Recuperar Contraseña",
      3
    ),
  ]);

  const eliminarPorId = (id) => {
    const nuevasFilas = rows.filter((fila) => fila.id !== id);
    setRows(nuevasFilas);
  };

  return (
    <>
      <ModalAdmin />
      <TableContainer
        sx={{
          backgroundColor: "#252525",
          borderColor: "#694D2C",
        }}
        component={Paper}
      >
        <Table sx={{ borderColor: "#694D2C" }} ariaLabel='collapsible table'>
          <TableHead sx={{ background: "#0F0F0F" }}>
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
