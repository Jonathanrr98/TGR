import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Input, MenuItem, Select, Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function FormContenedores() {
  const [Manifiesto, setManifiesto] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleChange = (event) => {
    setManifiesto(event.target.value);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box component='form' noValidate autoComplete='off'>
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
        sx={{
          backgroundColor: "#ffff",
          color: "Black",
          borderRadius: "24px",
          m: 1,

          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
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
    </Box>
  );
}
