import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Grid, Select, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Boton } from "./Boton";
import { Box, Container } from "@mui/system";

const style = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 400,
  bgcolor: "#252525",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "#ffff",
};

export default function ModalAsignarPaquete({ text }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [Paquete, setPaquete] = React.useState("");

  const handleChange = (event) => {
    setPaquete(event.target.value);
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
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
          style={{ minHeight: "100vh" }}
        >
          <Grid
            item
            sx={{
              top: "50%",
              left: "50%",

              bgcolor: "#252525",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              color: "#ffff",
            }}
          >
            <Typography
              variant='h4'
              sx={{
                mx: 3,
                display: "flex",
                justifyContent: "center",
                mb: 5,
              }}
            >
              {" "}
              Asignar Paquete
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
              <InputLabel
                sx={{
                  ":focus": {
                    color: "withe",
                    fontSize: "20px",
                    fontStyle: "bold",
                  },

                  color: "black",
                  fontSize: "20px",
                }}
                id='demo-select-small'
              >
                Paquetes
              </InputLabel>

              <Select
                sx={{
                  backgroundColor: "#ffff",
                  color: "black",
                  borderRadius: "24px",
                  m: 1,
                  px: 2,

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
                labelId='demo-select-small'
                id='demo-select-small'
                value={Paquete}
                label='Paquete'
                onChange={handleChange}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Paquete1</MenuItem>
                <MenuItem value={20}>Paquete2</MenuItem>
                <MenuItem value={30}>Paquete3</MenuItem>
              </Select>
              <Container sx={{ display: "flex" }}>
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
            </FormControl>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}
