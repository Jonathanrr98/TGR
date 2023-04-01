import * as React from "react";
import { FormGroup, Typography } from "@mui/material";
import { Box, Button, Input } from "@mui/material";
import Logo from "../assets/Logo.png";

export const LoginRestreador = () => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormGroup
        sx={{
          mt: 10,
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Box>
          <img src={Logo} alt='Logi img'></img>
        </Box>

        <Typography variant='h4' color={"#ffff"}>
          Restreador
        </Typography>

        <Input
          className='inputLogin'
          sx={{
            px: 2,
            m: 3,
            maxWidth: 400,
            border: 1,
            borderRadius: 32,
            borderColor: "#CF7A17",
            color: "#ffff",
          }}
          disableUnderline
          size='md'
          type='text'
          name='textcode'
          placeholder='Introduzca el Código del Producto'
          id='textcode'
          fullWidth
        />

        <Button
          sx={{
            maxWidth: 400,
            backgroundColor: "#CF7A17",
            borderRadius: 32,
            color: "#fff",
          }}
          size='sm'
          type='submit'
          fullWidth
        >
          Verificar
        </Button>
      </FormGroup>
    </Box>
  );
};
