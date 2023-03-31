import { Box, Button } from "@mui/material";
import React, { useCallback } from "react";

export const StepRemitente = () => {
  const isError = useCallback(() => Object.keys({}));
  return (
    <>
      <h1>formulario</h1>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant='contained'
          sx={{
            mt: 3,
            ml: 1,
          }}
          disabled={isError()}
          color='primary'
          onClick={!isError() ? handleNext : () => null}
        >
          Siguiente
        </Button>
      </Box>
    </>
  );
};
