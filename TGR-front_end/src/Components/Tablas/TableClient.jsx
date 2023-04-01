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
import ModalPago from "../Modals/ModalPago";
import ModalCliente from "../Modals/ModalCliente";
import ModalEliminarCliente from "../Modals/ModalEliminarCliente";
import { ModalEditarCliente } from "../Modals/ModalEditarCliente";

function createData(name, pagago, mail, telefono, direccion, price) {
  return {
    name,
    pagago,
    telefono,
    mail,
    direccion,
    price,

    cliente1: [
      {
        historial: "cortina",
        peso: "1",
        contenedor: "k8234kl",
        HBL: "30804548255",
        Pago: true,
      },
      {
        historial: "mesa",
        peso: "3",
        contenedor: "k2345kl",
        HBL: "20804548255",
        pago: false,
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

        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          <ModalEditarCliente />
        </TableCell>

        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          <ModalEliminarCliente />
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
                      Historial Producto Enviado
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
                      Pago
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.cliente1.map((historyRow) => (
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
                        {historyRow.peso}
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
                        {historyRow.pago === false ? (
                          <Typography
                            //disable pointer hober

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

export default function TableClient() {
  return (
    <>
      <ModalCliente text={"Crear Cliente"} />

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
