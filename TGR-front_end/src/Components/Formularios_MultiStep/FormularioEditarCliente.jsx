import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { Grid, Input, Typography } from "@mui/material";

export const FormularioEditarCliente = ({ handleClose }) => {
  const [formData, setFormData] = React.useState({
    ///////Remitente//////////////////
    Nombre: "",
    Apellidos: "",
    EstadoR: "",
    Ciudad: "",
    DireccionR: "",
    EmailR: "",
    TelefonoR: "",
    ///////DESTINATARIO//////////////////
    NombreYApellido: "",
    Direccion: "",
    Provincia: "",
    Municipio: "",
    Telefono: "",
    DNIPasaporte: "",
    CarnetDeIdentidad: "",
    Email: "",
    /////////MERCANCIA////////////////
    HBL: "",
    Bultos: "",
    Peso: "",
    Descripcion: "",
    Estado: "",
    Dueno: "",
    Destinatario: "",
  });
  const [activeStep, setActiveStep] = React.useState(0);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const cerrarModal = (event) => {
    handleClose();
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
      label: "Remitente",
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
            <Grid item xs={8}>
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
                onChange={handleChange}
              />

              <Input
                disableUnderline
                placeholder='Apellido'
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
                label='Apellido'
                name='Apellido'
                value={formData.Apellido}
                onChange={handleChange}
              />
              <Input
                disableUnderline
                placeholder='Estado'
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
                label='EstadoR'
                name='EstadoR'
                value={formData.EstadoR}
                onChange={handleChange}
              />

              <Input
                disableUnderline
                placeholder='Ciudad'
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
                label='Ciudad'
                name='Ciudad'
                value={formData.Ciudad}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={8}>
              <Input
                disableUnderline
                placeholder='Dirección'
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
                label='DireccionR'
                name='DireccionR'
                value={formData.DireccionR}
                onChange={handleChange}
              />

              <Input
                disableUnderline
                placeholder='Email'
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
                label='EmailR'
                name='EmailR'
                value={formData.EmailR}
                onChange={handleChange}
              />

              <Input
                disableUnderline
                placeholder='Teléfono'
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
                label='TelefonoR'
                name='TelefonoR'
                value={formData.TelefonoR}
                onChange={handleChange}
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
                <Button onClick={cerrarModal}>Cancelar</Button>
              </Grid>
              <Grid item>
                <Button onClick={handleNext}>Siguiente</Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      ),
    },
    {
      label: "Destinatario",
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
            <Grid item xs={8}>
              <Input
                disableUnderline
                placeholder='Nombre y Apellido'
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
                label='NombreYApellido'
                name='NombreYApellido'
                value={formData.NombreYApellido}
                onChange={handleChange}
              />

              <Input
                disableUnderline
                placeholder='Dirección'
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
                label='Direccion'
                name='Direccion'
                value={formData.Direccion}
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={8}>
              <Input
                disableUnderline
                placeholder='Teléfono'
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
                label='Telefono'
                name='Telefono'
                value={formData.Telefono}
                onChange={handleChange}
              />

              <Input
                disableUnderline
                placeholder='DNI / Pasaporte'
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
                label='DNIPasaporte'
                name='DNIPasaporte'
                value={formData.DNIPasaporte}
                onChange={handleChange}
              />

              <Input
                disableUnderline
                placeholder='Carnet de Identidad'
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
                label='CarnetDeIdentidad'
                name='CarnetDeIdentidad'
                value={formData.CarnetDeIdentidad}
                onChange={handleChange}
              />

              <Input
                disableUnderline
                placeholder='Email'
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
                label='Email'
                name='Email'
                value={formData.Email}
                onChange={handleChange}
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
                <Button onClick={cerrarModal}>Cancelar</Button>
              </Grid>
              <Grid item>
                <Button onClick={handleNext}>Siguiente</Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      ),
    },
    {
      label: "Mercancía",
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
            <Grid item xs={8}>
              <Input
                disableUnderline
                placeholder='HBL'
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
                label='HBL'
                name='HBL'
                value={formData.HBL}
                onChange={handleChange}
              />

              <Input
                disableUnderline
                placeholder='Bultos'
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
                label='Bultos'
                name='Bultos'
                value={formData.Bultos}
                onChange={handleChange}
              />
              <Input
                disableUnderline
                placeholder='Peso (kg)'
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
                label='Peso'
                name='Peso'
                value={formData.Peso}
                onChange={handleChange}
              />

              <Input
                disableUnderline
                placeholder='Descripción'
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
                label='Descripcion'
                name='Descripcion'
                value={formData.Descripcion}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={8}>
              <Input
                disableUnderline
                placeholder='Estado'
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
                label='Estado'
                name='Estado'
                value={formData.Estado}
                onChange={handleChange}
              />

              <Input
                disableUnderline
                placeholder='Dueño'
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
                label='Dueno'
                name='Dueno'
                value={formData.Dueno}
                onChange={handleChange}
              />

              <Input
                disableUnderline
                placeholder='Destinatario'
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
                label='Destinatario'
                name='Destinatario'
                value={formData.Destinatario}
                onChange={handleChange}
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
                <Button onClick={cerrarModal}>Cancelar</Button>
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
        Editar Cliente
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
