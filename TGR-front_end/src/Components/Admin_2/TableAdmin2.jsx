import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(Correo, Contrasena, JWT, TipoPermiso, RecuperarContrasena) {
  return {
    Correo,
    Contrasena,
    JWT,
    TipoPermiso,
    RecuperarContrasena,
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
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("correo1@gmail.com", " pass", "jwt+++", "administrador1"),
  createData("correo2@gmail.com", " pass2", "jwt+++", "administrador2"),
  createData("correo31@gmail.com", " pass3", "jwt+++", "administrador1"),
];

export default function TableAdmin2() {
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
                Correo
              </TableCell>
              <TableCell
                style={{ borderColor: "#694D2C", color: "white" }}
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
