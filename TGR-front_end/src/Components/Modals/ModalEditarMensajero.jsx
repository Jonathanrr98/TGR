import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
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

export default function ModalEditarMensajero({ text }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              spacing={0}
              columns={12}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                mt: 2,
              }}
            >
              <Grid item xs={6}>
                <Button onClick={handleClose}>Cancelar</Button>
              </Grid>
              <Grid item xs={6}>
                <Button onClick={handleNext}>Sigiente</Button>
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
              xs={16}
              sx={{
                display: "flex",
                p: 2,
              }}
            >
              <Grid item xs={15}>
                <Button onClick={handleBack}>Atrás</Button>
              </Grid>
              <Grid item xs={15}>
                <Button onClick={handleClose}>Cancelar</Button>
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
