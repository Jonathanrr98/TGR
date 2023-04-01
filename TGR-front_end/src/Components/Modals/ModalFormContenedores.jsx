import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import FormMultiStep from "../FormClienteMS";
import { FMMensajero } from "../Formularios_MultiStep/FMMensajero";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Input, MenuItem, Select, Typography } from "@mui/material";
import { Container } from "@mui/system";

const style = {
  top: "50%",
  left: "50%",
  borderRadius: 4,
  width: 400,
  height: 300,
  bgcolor: "#252525",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "#ffff",
};

export default function ModalFormContenedores({ text }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [Manifiesto, setManifiesto] = React.useState("");
  const handleChange = (event) => {
    setManifiesto(event.target.value);
  };

  return (
    <div>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            backgroundColor: "#A86500",
            color: "white",
            borderRadius: "24px",
            m: 1,
            px: 2,

            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            fontWeight: "bold",
            fontSize: "12px",
          }}
          onClick={handleOpen}
        >
          {text}
        </Button>
      </Grid>
      <Modal
        sx={{}}
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          style={{ height: "100%" }}
        >
          <Grid
            item
            sx={{
              ...style,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant='h4'
              sx={{
                mx: 3,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {" "}
              Crear Contenedor
            </Typography>

            <Input
              sx={{
                px: 2,
                mx: 8,
                my: 3,
                border: 1,
                borderRadius: 32,
                borderColor: "#fff",
                color: "#ffff",
              }}
              disableUnderline
              placeholder='Id'
            />
            <Typography
              variant='subtitle1'
              sx={{
                mx: 3,
              }}
            >
              {" "}
              Seleccione un Manifiesto
            </Typography>
            <Select
              size='small'
              sx={{
                minWidth: 200,
                justifyContent: "center",
                backgroundColor: "#ffff",
                color: "Black",
                borderRadius: "24px",
                m: 1,
                maxWidth: 200,
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              labelId='demo-select-small'
              id='demo-select-small'
              value={Manifiesto}
              label='Manifiesto'
              onChange={handleChange}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Manifiesto1"}>Manifiesto1</MenuItem>
              <MenuItem value={"Manifiesto2"}>Manifiesto2</MenuItem>
              <MenuItem value={"Manifiesto3"}>Manifiesto3</MenuItem>
            </Select>

            <Container sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{
                  backgroundColor: "#252525",
                  color: "white",
                  borderRadius: "10px",
                  m: 1,
                  px: 2,
                  border: 1,
                  borderColor: "#FF9B06",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
                onClick={handleClose}
                colorLetra={"#ffff"}
                colorFondo={"#f44336"}
                text={"Cancelar"}
              >
                Cancelar
              </Button>
              <Button
                sx={{
                  backgroundColor: "#A86500  ",
                  color: "white",
                  borderRadius: "10px",
                  m: 1,
                  px: 2,

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
                onClick={handleClose}
                colorLetra={"#ffff"}
                colorFondo={"#A86500"}
                text={"Asignar"}
              >
                Guardar
              </Button>
            </Container>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}
