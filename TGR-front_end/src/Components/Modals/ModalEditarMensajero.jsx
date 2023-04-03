import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Input, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
const style = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 400,
  bgcolor: "#252525",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "#ffff",
};

export default function ModalEditarMensajero({ row }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = React.useState({
    /////// ****1/2****/////////////////
    Nombre: row.Nombre,
    CantidadEnvios: row.CantidadEnvios,
    Matricula: row.Matricula,

    ///////****2/2****//////////////////
    Provincia: row.Provincia,
    Telefono: row.Telefono,
    Movil: row.Movil,
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
        <Grid container spacing={0} columns={12}>
          <Grid container sx={{}}>
            <Grid xs={12}>
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
                placeholder='Cantid de Envios'
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
                label='CantidadEnvios'
                name='CantidadEnvios'
                value={formData.CantidadEnvios}
                onChange={(e) =>
                  setFormData({ ...formData, CantidadEnvios: e.target.value })
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
                <Button onClick={handleNext}>Siguiente</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
                onChange={(e) =>
                  setFormData({ ...formData, Telefono: e.target.value })
                }
              />
              <Input
                disableUnderline
                placeholder='Móvil'
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
                label='Movil'
                name='Movil'
                value={formData.Movil}
                onChange={(e) =>
                  setFormData({ ...formData, Movil: e.target.value })
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
    <div>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <EditIcon
          onClick={handleOpen}
          sx={{
            ":hover": {
              color: "#CF7A17",
              cursor: "pointer",
            },
          }}
        />
      </Grid>
      <Modal
        sx={{}}
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
          style={{ minHeight: "100vh" }}
        >
          <Grid
            item
            sx={{
              top: "50%",
              left: "50%",

              bgcolor: "#252525",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              color: "#ffff",
            }}
          >
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
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}
