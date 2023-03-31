import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { Grid, Input, Typography } from "@mui/material";

export const FMAdmin = () => {
  const [formData, setFormData] = React.useState({
    /////// ****1/2****/////////////////
    Correo: "",
    Contrasena: "",
    JWT: "",

    ///////****2/2****//////////////////
    RecuperarContrasena: "",
    TipoPermiso: "",
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
                placeholder='Correo'
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
                label='Correo'
                name='Correo'
                value={formData.Correo}
                onChange={(e) =>
                  setFormData({ ...formData, Nombre: e.target.value })
                }
              />

              <Input
                disableUnderline
                placeholder='Contraseña'
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
                label='Contrasena'
                name='Contrasena'
                value={formData.Contrasena}
                onChange={(e) =>
                  setFormData({ ...formData, Contacto: e.target.value })
                }
              />
              <Input
                disableUnderline
                placeholder='JWT'
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
                label='JWT'
                name='JWT'
                value={formData.JWT}
                onChange={(e) =>
                  setFormData({ ...formData, Matricula: e.target.value })
                }
              />
            </Grid>

            <Grid
              xs={16}
              sx={{
                display: "flex",
                p: 2,
              }}
            >
              <Grid item xs={15}></Grid>
              <Grid item xs={1}>
                <Button onClick={handleNext}>Next</Button>
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
                placeholder='Recuperar Contraseña'
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
                label='RecuperarContrasena'
                name='RecuperarContrasena'
                value={formData.RecuperarContrasena}
                onChange={(e) =>
                  setFormData({ ...formData, Direccion: e.target.value })
                }
              />

              <Input
                disableUnderline
                placeholder='Tipo de Permiso'
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
                label='TipoPermiso'
                name='TipoPermiso'
                value={formData.TipoPermiso}
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
              xs={16}
              sx={{
                display: "flex",
                p: 2,
              }}
            >
              <Grid item xs={15}>
                <Button onClick={handleBack}>Back</Button>
              </Grid>
              <Grid item xs={1}>
                <Button onClick={handleSubmit}>Enviar</Button>
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
        Crear Administrador
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
