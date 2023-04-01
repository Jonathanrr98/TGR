import React from "react";
import { Button, Input, MenuItem, Select, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";

export const FormularioContenedores = ({ handleClose }) => {
  const [Manifiesto, setManifiesto] = useState("");
  const handleChange = (event) => {
    setManifiesto(event.target.value);
  };

  const cerrarModal = () => handleClose();

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
          onClick={cerrarModal}
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
        >
          Guardar
        </Button>
      </Container>
    </>
  );
};
