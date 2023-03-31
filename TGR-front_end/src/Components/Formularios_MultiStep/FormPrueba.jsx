import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { Grid, Input } from "@mui/material";

export const FormPrueba = () => {
  const [formData, setFormData] = React.useState({
    ///////Remitente//////////////////
    nombre: "",
    apellidos: "",
    estado: "",
    ciudad: "",
    direccion: "",
    email: "",
    telefono: "",
    ///////DESTINATARIO//////////////////
    nombreyapellido: "",
    direccion: "",
    provincia: "",
    municipio: "",
    telefono: "",
    dni_pasaporte: "",
    carnetDeIdentidad: "",
    email: "",
    /////////MERCANCIA////////////////
    nombreyapellido: "",
    direccion: "",
    provincia: "",
    municipio: "",
    telefono: "",
    dni_pasaporte: "",
    email: "",
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
                value={formData.name}
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
                value={formData.name}
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
                label='Estado'
                name='Estado'
                value={formData.name}
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
                value={formData.name}
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
                label='Direccion'
                name='Direccion'
                value={formData.name}
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
                value={formData.name}
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
                label='Telefono'
                name='telefono'
                value={formData.name}
                onChange={handleChange}
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
                value={formData.name}
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
                value={formData.name}
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
                value={formData.name}
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
                value={formData.name}
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
                value={formData.name}
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
                value={formData.name}
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
                value={formData.name}
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
                value={formData.name}
                onChange={handleChange}
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
                <Button onClick={handleNext}>Next</Button>
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
                value={formData.name}
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
                value={formData.name}
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
                value={formData.name}
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
                value={formData.name}
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
                value={formData.name}
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
                value={formData.name}
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
                value={formData.name}
                onChange={handleChange}
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