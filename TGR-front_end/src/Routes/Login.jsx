import * as React from "react";
import Layout from "../Components/Layout";
import { FormGroup, Typography } from "@mui/material";
import { Box, Button, Input } from "@mui/material";
import Logo from "../assets/Logo.png";

export const Login = () => {
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
          <img src={Logo} alt='Logo img'></img>
        </Box>
        <Typography variant='h5' color={"#ffff"}>
          Administración
        </Typography>

        <Input
          className='inputLogin'
          disableUnderline
          sx={{
            px: 2,
            m: 3,
            maxWidth: 400,
            border: 1,
            borderRadius: 32,
            borderColor: "#CF7A17",
            color: "#ffff",
          }}
          st
          size='md'
          type='email'
          name='email'
          placeholder='Email'
          id='email'
          fullWidth
        />
        <Input
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
          variant='plain'
          size='md'
          type='password'
          name='password'
          placeholder='Contraseña'
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
          Iniciar Sesión
        </Button>
      </FormGroup>
    </Box>
  );
};
