import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { Grid, Input, Typography } from "@mui/material";

export const FormularioEditarMensajero = ({ handleClose }) => {
  const [formData, setFormData] = React.useState({
    /////// ****1/2****/////////////////
    Nombre: "",
    Contacto: "",
    Matricula: "",

    ///////****2/2****//////////////////
    Direccion: "",
    Provincia: "",
    Municipio: "",
  });
  const [activeStep, setActiveStep] = React.useState(0);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const cerrarModal = () => handleClose();

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const steps = [
    {
      label: "Información 1/2",
      content: (
        <Box sx={{ flexGrow: 1, maxWidth: 900 }}>
          <Grid
            container
            spacing={1}
            columns={16}
            sx={{
              maxWidth: 1200,
              maxHeight: 500,
              borderRadius: 10,
            }}
          >
            <Grid item xs={16}>
              <Input
                disableUnderline
                placeholder='Nombre'
                sx={{
                  display: "flex",
                  px: 2,
                  mx: 5,
                  mt: 3,
                  border: 1,
                  borderRadius: 32,
                  borderColor: "#fff",
                  color: "#ffff",
                }}
                label='Nombre'
                name='Nombre'
                value={formData.Nombre}
                onChange={(e) =>
                  setFormData({ ...formData, Nombre: e.target.value })
                }
              />

              <Input
                disableUnderline
                placeholder='Contacto'
                sx={{
                  display: "flex",
                  px: 2,
                  mx: 5,
                  my: 2,
                  border: 1,
                  borderRadius: 32,
                  borderColor: "#fff",
                  color: "#ffff",
                }}
                label='Contacto'
                name='Contacto'
                value={formData.Contacto}
                onChange={(e) =>
                  setFormData({ ...formData, Contacto: e.target.value })
                }
              />
              <Input
                disableUnderline
                placeholder='Matrícula'
                sx={{
                  display: "flex",
                  px: 2,
                  mx: 5,
                  my: 2,
                  border: 1,
                  borderRadius: 32,
                  borderColor: "#fff",
                  color: "#ffff",
                }}
                label='Matricula'
                name='Matricula'
                value={formData.Matricula}
                onChange={(e) =>
                  setFormData({ ...formData, Matricula: e.target.value })
                }
              />
            </Grid>

            <Grid
              container
              spacing={2}
              display='flex'
              justifyContent='center'
              alignItems='center'
              p={2}
              flexDirection='row'
            >
              <Grid item>
                <Button onClick={handleClose}>Cancelar</Button>
              </Grid>
              <Grid item>
                <Button onClick={handleNext}>Sigiente</Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      ),
    },
    {
      label: "Información 2/2",
      content: (
        <Box sx={{ flexGrow: 1, maxWidth: 900 }}>
          <Grid
            container
            spacing={1}
            columns={16}
            sx={{
              maxWidth: 1200,
              maxHeight: 500,
              borderRadius: 10,
            }}
          >
            <Grid item xs={16}>
              <Input
                disableUnderline
                placeholder='Dirección'
                sx={{
                  display: "flex",
                  px: 2,
                  mx: 5,
                  mt: 3,
                  border: 1,
                  borderRadius: 32,
                  borderColor: "#fff",
                  color: "#ffff",
                }}
                label='Direccion'
                name='Direccion'
                value={formData.Direccion}
                onChange={(e) =>
                  setFormData({ ...formData, Direccion: e.target.value })
                }
              />

              <Input
                disableUnderline
                placeholder='Provincia'
                sx={{
                  display: "flex",
                  px: 2,
                  mx: 5,
                  my: 2,
                  border: 1,
                  borderRadius: 32,
                  borderColor: "#fff",
                  color: "#ffff",
                }}
                label='Provincia'
                name='Provincia'
                value={formData.Provincia}
                onChange={(e) =>
                  setFormData({ ...formData, Provincia: e.target.value })
                }
              />
              <Input
                disableUnderline
                placeholder='Municipio'
                sx={{
                  display: "flex",
                  px: 2,
                  mx: 5,
                  my: 2,
                  border: 1,
                  borderRadius: 32,
                  borderColor: "#fff",
                  color: "#ffff",
                }}
                label='Municipio'
                name='Municipio'
                value={formData.Municipio}
                onChange={(e) =>
                  setFormData({ ...formData, Municipio: e.target.value })
                }
              />
            </Grid>

            <Grid
              container
              spacing={2}
              display='flex'
              justifyContent='center'
              alignItems='center'
              p={2}
              flexDirection='row'
            >
              <Grid item>
                <Button onClick={handleBack}>Atrás</Button>
              </Grid>
              <Grid item>
                <Button onClick={handleClose}>Cancelar</Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={handleSubmit}
                  variant='contained'
                  color='primary'
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      ),
    },
  ];
  const currentStep = steps[activeStep].content;
  return (
    <>
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
        Editar Mensajero
      </Typography>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel
              sx={{
                backgroundColor: "#ffff",
                p: 1,
                borderRadius: 20,
              }}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      {currentStep}
    </>
  );
};
