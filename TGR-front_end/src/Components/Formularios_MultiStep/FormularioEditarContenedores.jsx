import React from "react";
import { Button, Input, MenuItem, Select, Typography } from "@mui/material";
import { Container } from "@mui/system";

export const FormularioEditarContenedores = ({ handleClose, row }) => {
  const [Manifiesto, setManifiesto] = React.useState("");

  const cerrarModal = () => handleClose();

  const [formData, setFormData] = React.useState({
    Contenedor: row.Contenedor,
    id: row.id,
    Manifiesto: row.manifiesto,
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <Typography
        variant='h4'
        sx={{
          mx: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {" "}
        Editar Contenedor
      </Typography>

      <Input
        disableUnderline
        placeholder='Id'
        sx={{
          px: 2,
          mx: 8,
          my: 3,
          border: 1,
          borderRadius: 32,
          borderColor: "#fff",
          color: "#ffff",
        }}
        label='id'
        value={formData.Contenedor}
        onChange={handleChange}
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
        label='Manifiesto'
        value={formData.Manifiesto}
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
          onClick={cerrarModal}
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
          colorLetra={"#ffff"}
          colorFondo={"#A86500"}
          text={"Asignar"}
        >
          Guardar
        </Button>
      </Container>
    </>
  );
};
