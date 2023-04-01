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

function createData(
  Nombre,
  CantidadEnvios,
  Matricula,
  Provincia,
  Telefono,
  Movil
) {
  return {
    Nombre,
    CantidadEnvios,
    Matricula,
    Provincia,
    Telefono,
    Movil,
  };
}

function Row(props) {
  const { row } = props;
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
          {row.Nombre}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.CantidadEnvios}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.Matricula}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.Provincia}
        </TableCell>

        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.Telefono}
        </TableCell>

        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.Movil}
        </TableCell>

        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          Editar
        </TableCell>

        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          <ModalEliminarMensajero />
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const rows = [
  createData(
    "Pedro Hernandez",
    " 32",
    "P34070",
    "La Habana",
    "78976787",
    "53467676"
  ),
  createData("Juan Gomez", " 15", "P32232", "Holguín", "73324787", "55767636"),
  createData(
    "Manuel Reina",
    " 27",
    "P0982",
    "Las Tunas",
    "78493787",
    "52367676"
  ),
];

export default function TableMensajeros() {
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
              <TableCell sx={{ borderColor: "#694D2C" }} />
              <TableCell sx={{ borderColor: "#694D2C", color: "white" }}>
                Nombre
              </TableCell>
              <TableCell
                style={{ borderColor: "#694D2C", color: "white" }}
                align='center'
              >
                Cantidad de Envios
              </TableCell>
              <TableCell
                sx={{ borderColor: "#694D2C", color: "white" }}
                align='center'
              >
                Matrícula
              </TableCell>
              <TableCell
                sx={{ borderColor: "#694D2C", color: "white" }}
                align='center'
              >
                Provincia
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
                Móvil
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
                key={row.Correo}
                row={row}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}