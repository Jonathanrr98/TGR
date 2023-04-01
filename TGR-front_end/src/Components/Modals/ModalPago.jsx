import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, Input } from "@mui/material";
import FormMultiStep from "../FormClienteMS";
import { Container, display } from "@mui/system";

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

export default function ModalPago({ text }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            color: "red",

            height: 20,
          }}
          onClick={handleOpen}
        >
          {text}
        </Button>
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
            <Container>
              <Typography
                sx={{
                  p: 4,
                  m: 3,
                }}
                variant='h3'
              >
                Finalizar Pago
              </Typography>
              <Grid sx={{ display: "block", p: 2, m: 1 }}>
                <Typography variant='h6'>
                  Cantidad a Pagar:
                  <Typography
                    variant='h6'
                    sx={{
                      color: "#CF7A17",
                    }}
                  >
                    100 USD
                  </Typography>
                </Typography>
              </Grid>

              <Input
                placeholder='Cantidad Pagada Total'
                fullWidth
                sx={{
                  color: "#ffff",
                  border: 1,
                  borderRadius: 1,
                  borderColor: "#DEDEDE",
                  maxWidth: 500,
                  p: 1,
                }}
              ></Input>

              <Button
                fullWidth
                sx={{
                  borderRadius: 1,
                  p: 1,
                  mt: 5,
                  color: "#ffff",
                  backgroundColor: "#CF7A17",
                  fontStyle: "inherit",
                }}
              >
                Efectuar Pago
              </Button>

              <Button
                fullWidth
                sx={{
                  backgroundColor: "#252525",
                  color: "white",
                  borderRadius: 1,
                  mt: 2,
                  px: 2,
                  border: 1,
                  borderColor: "#FF9B06",
                  display: "flex",
                  alignItems: "center",

                  fontWeight: "bold",
                  fontSize: "12px",
                }}
                onClick={handleClose}
                colorLetra={"#ffff"}
                colorFondo={"#f44336"}
                text={"Cancelar"}
              >
                Cancelar
              </Button>
            </Container>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}
