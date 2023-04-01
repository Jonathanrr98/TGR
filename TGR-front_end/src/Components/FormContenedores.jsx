import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, MenuItem, Select, Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function FormContenedores({ handleClose }) {
  const [manifiesto, setManifiesto] = React.useState("");

  const handleChange = (event) => {
    setManifiesto(event.target.value);
  };

  const cerrarModal = (event) => {
    handleClose();
  };

  return (
    <Box component='form' noValidate autoComplete='off' sx={{ p: 3 }}>
      <Typography variant='h4' sx={{ mx: "auto" }}>
        Crear Contenedor
      </Typography>

      <TextField
        sx={{ my: 3 }}
        fullWidth
        variant='outlined'
        size='small'
        label='Id'
      />

      <Typography variant='subtitle1' sx={{ mt: 2 }}>
        Seleccione un Manifiesto
      </Typography>

      <Select
        size='small'
        sx={{ mt: 1, minWidth: "120px" }}
        labelId='demo-select-small'
        id='demo-select-small'
        value={manifiesto}
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

      <Container sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
        <Button
          variant='contained'
          color='error'
          sx={{ mr: 1 }}
          onClick={cerrarModal}
        >
          Cancelar
        </Button>
        <Button variant='contained' color='primary' onClick={() => {}}>
          Guardar
        </Button>
      </Container>
    </Box>
  );
}
