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
import { Button, Container, Grid, Input, TextField } from "@mui/material";

function createData(
  TipoMercancia,
  Cantidad,
  Destinatario,
  Direccion,
  Provincia,
  Municipio
) {
  return {
    TipoMercancia,
    Cantidad,
    Destinatario,
    Provincia,
    Direccion,
    Municipio,

    history: [
      {
        EntregaDePedido: "",
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
          {row.TipoMercancia}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.Cantidad}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='center'
        >
          {row.Destinatario}
        </TableCell>
        <TableCell
          sx={{ color: "white", borderColor: "#694D2C" }}
          align='right'
        >
          {row.Direccion}
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
          {row.Municipio}
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
              <Typography
                color={"white"}
                variant='inherit'
                gutterBottom
                component='div'
              >
                {/* History */}
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow sx={{ color: "white", borderColor: "#252525" }}>
                    <TableCell sx={{ color: "white", borderColor: "#252525" }}>
                      Entrega de Pedido
                    </TableCell>
                    <Grid
                      direction='column'
                      sx={{
                        display: "flex",

                        alignItems: "center",
                        justifyContent: "center",
                        alignContent: "center",
                      }}
                    >
                      <TableCell
                        borderColor
                        sx={{
                          color: "white",
                          borderColor: "#252525",
                          alignItems: "center",
                          justifyContent: "center",
                          alignContent: "center",
                        }}
                        align='center'
                      >
                        Código de Confirmación
                      </TableCell>
                      <TextField
                        placeholder='XXXX'
                        sx={{
                          alignItems: "center",
                          justifyContent: "center",
                          alignContent: "center",
                          maxWidth: 150,
                          color: "#ffff",
                        }}
                        id='standard-basic'
                        variant='standard'
                        focused
                        color='warning'
                      />
                      <Button
                        sx={{
                          backgroundColor: "#A7681F",
                          color: "#ffff",
                          borderRadius: "24px",
                          m: 1,
                          px: 2,
                          py: 0,

                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          alignContent: "center",
                          fontWeight: "bold",
                          fontSize: "12px",
                        }}
                      >
                        Validar Código
                      </Button>
                    </Grid>
                  </TableRow>
                </TableHead>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData(
    "Miscelaniasa",
    " 2",
    " Juan Delgado",
    "Campanario entre Zanja y Dragones",
    " La Habana",
    " Plaza de la Revolución"
  ),
  createData(
    "Miscelaniasa",
    " 2",
    " Juan Delgado",
    "Campanario entre Zanja y Dragones",
    " La Habana",
    " Plaza de la Revolución"
  ),
];

export default function VistaMensajero() {
  return (
    <>
      <Grid
        Container
        fullWidth
        direction='column'
        sx={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          p: 5,
        }}
      >
        <TableContainer
          sx={{
            backgroundColor: "#252525",
            borderColor: "#694D2C",
            maxWidth: 1200,
          }}
          component={Paper}
        >
          <Table sx={{ borderColor: "#694D2C" }} aria-label='collapsible table'>
            <TableHead sx={{ maxHeight: 10, background: "#0F0F0F" }}>
              <TableRow sx={{ borderColor: "#694D2C" }}>
                <TableCell sx={{ borderColor: "#694D2C" }} />
                <TableCell sx={{ borderColor: "#694D2C", color: "white" }}>
                  Tipo de Mercancía
                </TableCell>
                <TableCell
                  style={{ borderColor: "#694D2C", color: "white" }}
                  align='center'
                >
                  Cantidad
                </TableCell>
                <TableCell
                  sx={{ borderColor: "#694D2C", color: "white" }}
                  align='center'
                >
                  Destinatario
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
                  Provincia
                </TableCell>

                <TableCell
                  sx={{ borderColor: "#694D2C", color: "white" }}
                  align='center'
                >
                  Municipio
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ borderColor: "#694D2C", color: "white" }}>
              {rows.map((row) => (
                <Row
                  sx={{ borderColor: "#694D2C", color: "white" }}
                  key={row.TipoMercancia}
                  row={row}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Grid
          container
          sx={{
            maxWidth: 600,
          }}
        >
          <Button
            fullWidth
            sx={{
              backgroundColor: "#A7681F",
              color: "#ffff",
              borderRadius: "38px",
              m: 2,

              display: "flex",
              alignItems: "center",
              justifyContent: "Center",
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            Cerrar Sesión
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
