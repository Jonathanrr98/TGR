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
import { Container } from "@mui/material";
import { Boton } from "./Boton";
import ModalAdmin from "./ModalAdmin";

function createData(name, pagago, mail, telefono, direccion, price) {
  return {
    name,
    pagago,
    telefono,
    mail,
    direccion,
    price,

    history: [
      {
        dni_pasaporte: "L3782",
        provincia: "La Habana",
        municipio: "Playa",
        ci: "957678965",
      },
      {
        dni_pasaporte: "F7654",
        provincia: "Granma",
        municipio: "Bayamo",
        ci: "875654890",
      },
    ],
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
          {row.pagago}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.mail}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='right'
        >
          {row.telefono}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.direccion}
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
              <Typography
                color={"white"}
                variant='h6'
                gutterBottom
                component='div'
              >
                {/* History */}
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow sx={{ color: "white", borderColor: "#694D2C" }}>
                    <TableCell sx={{ color: "white", borderColor: "#694D2C" }}>
                      DNI / Pasaporte
                    </TableCell>
                    <TableCell sx={{ color: "white", borderColor: "#694D2C" }}>
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
                      No. deCarnet de Identidad
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.dni_pasaporte}>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        component='th'
                        scope='row'
                      >
                        {historyRow.dni_pasaporte}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                      >
                        {historyRow.provincia}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {historyRow.municipio}
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", borderColor: "#694D2C" }}
                        align='center'
                      >
                        {historyRow.ci}
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

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "Juan Perez",
    " 50/100",
    " mail@asd.com",
    "+" + 18983589139,
    "98, Ave 3ra e/ 4ta Miami Fl",
    3.99
  ),
  createData(
    "Pepe Perez",
    " 50/100",
    " mail2@asd.com",
    "+" + 5358419139,
    "3, Ave 3ra e/ 4ta Miami Fl",
    3.99
  ),
  createData(
    "Frank Perez",
    " 50/100",
    " mail3@asd.com",
    "+" + 5358419139,
    "8, Ave 3ra e/ 4ta Miami Fl",
    3.99
  ),
  createData(
    "Jose Perez",
    " 50/100",
    " mail4@asd.com",
    "+" + 5358736139,
    "358, Ave 3ra e/ 4ta Miami Fl",
    3.99
  ),
  createData(
    "Luis Perez",
    " 50/100",
    " mail5@asd.com",
    "+" + 53584149932,
    "28, Ave 3ra e/ 4ta Miami Fl",
    3.99
  ),
];

export default function TableAdmin() {
  return (
    <>
      <ModalAdmin text={"Crear Administrador"} />
      <TableContainer
        sx={{ backgroundColor: "#252525", borderColor: "#694D2C" }}
        component={Paper}
      >
        <Table sx={{ borderColor: "#694D2C" }} aria-label='collapsible table'>
          <TableHead sx={{ maxHeight: 10, background: "#0F0F0F" }}>
            <TableRow sx={{ borderColor: "#694D2C" }}>
              <TableCell sx={{ borderColor: "#694D2C" }} />
              <TableCell sx={{ borderColor: "#694D2C", color: "white" }}>
                Nombre y Apellido
              </TableCell>
              <TableCell
                style={{ borderColor: "#694D2C", color: "white" }}
                align='center'
              >
                PAGAGO
              </TableCell>
              <TableCell
                sx={{ borderColor: "#694D2C", color: "white" }}
                align='center'
              >
                Mail
              </TableCell>
              <TableCell
                sx={{ borderColor: "#694D2C", color: "white" }}
                align='center'
              >
                Número
              </TableCell>
              <TableCell
                sx={{ borderColor: "#694D2C", color: "white" }}
                align='center'
              >
                Dirección
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ borderColor: "#694D2C", color: "white" }}>
            {rows.map((row) => (
              <Row
                sx={{ borderColor: "#694D2C", color: "white" }}
                key={row.name}
                row={row}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
