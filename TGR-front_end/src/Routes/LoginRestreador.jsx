import * as React from "react";
import Layout from "../Components/Layout";
import { FormGroup, Typography } from "@mui/material";
import { Box, Button, Input } from "@mui/material";

export const LoginRestreador = () => {
  return (
    <Layout>
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
          <Typography sx={{ mt: 5 }} variant='h4' color={"#ffff"}>
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
    </Layout>
  );
};
