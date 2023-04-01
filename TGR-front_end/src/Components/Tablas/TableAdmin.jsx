import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container, Grid } from "@mui/material";
import ModalAdmin from "../Modals/ModalAdmin";
import { ModalEditarAdmin } from "../Modals/ModalEditarAdmin";
import ModalEliminarAdministrador from "../Modals/ModalEliminarAdministrador";
import { useState } from "react";

// Definimos la función que crea las filas
function createData(
  Correo,
  Contrasena,
  JWT,
  TipoPermiso,
  RecuperarContrasena,
  id
) {
  return {
    Correo,
    Contrasena,
    JWT,
    TipoPermiso,
    RecuperarContrasena,
    id,
  };
}

// Definimos la función que renderiza cada fila
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
          ></IconButton>
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          component='th'
          scope='row'
        >
          {row.Correo}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.Contrasena}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.JWT}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.TipoPermiso}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.RecuperarContrasena}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          <ModalEditarAdmin />
        </TableCell>

        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          <ModalEliminarAdministrador row={row} eliminarPorId={eliminarPorId} />
        </TableCell>
      </TableRow>
    </React.Fragment>
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Container>
            <ModalAdmin />
            <TableContainer
              sx={{ backgroundColor: "#252525", borderColor: "#694D2C" }}
            >
              <Table
                sx={{ borderColor: "#694D2C" }}
                ariaLabel='collapsible table'
              >
                <TableHead sx={{ background: "#0F0F0F" }}>
                  <TableRow sx={{ borderColor: "#694D2C" }}>
                    <TableCell sx={{ borderColor: "#694D2C" }} />
                    <TableCell sx={{ borderColor: "#694D2C", color: "white" }}>
                      Correo
                    </TableCell>
                    <TableCell
                      sx={{ borderColor: "#694D2C", color: "white" }}
                      align='center'
                    >
                      Contraseña
                    </TableCell>
                    <TableCell
                      sx={{ borderColor: "#694D2C", color: "white" }}
                      align='center'
                    >
                      JWT
                    </TableCell>
                    <TableCell
                      sx={{ borderColor: "#694D2C", color: "white" }}
                      align='center'
                    >
                      Tipo de Permiso
                    </TableCell>
                    <TableCell
                      sx={{ borderColor: "#694D2C", color: "white" }}
                      align='center'
                    >
                      Recuperar Contraseña
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
                      key={row.Correo}
                      row={row}
                      eliminarPorId={eliminarPorId}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
