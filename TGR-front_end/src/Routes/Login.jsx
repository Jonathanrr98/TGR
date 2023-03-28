import * as React from "react";

import Grid from "@mui/material/Grid";

import "../Styles/Login.css";
import Layout from "../Components/Layout";
import theme from "../Styles/mainStyle";
import { Box, Button, Input } from "@mui/material";

export const Login = () => {
  return (
    <Layout>
      <Grid>
        <Box sx={{ width: 500 }} className='login'>
          <div className='form'>
            <form noValidate>
              <span>TGR</span>

              <Input
                sx={{ m: 2, width: 400 }}
                size='md'
                type='email'
                name='email'
                placeholder='Email'
                id='email'
              />

              <Input
                sx={{ m: 2, width: 400 }}
                size='sm'
                type='password'
                name='password'
                placeholder='Contraseña'
              />

              <Button size='sm' type='submit'>
                Login
              </Button>
            </form>
          </div>
        </Box>
      </Grid>
    </Layout>
  );
};
