import * as React from "react";
import { useState } from "react";
import { Button, Container, Grid, Modal, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function ModalEliminarMensajero({ text }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    // TODO: Implement delete functionality
    handleClose();
  };

  return (
    <div>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DeleteOutlineIcon
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
              borderRadius: "10px",
              bgcolor: "#252525",
              border: "2px solid #000",
              boxShadow: 24,
              p: 2,
              color: "#ffff",
            }}
          >
            <Grid
              direction='column'
              sx={{
                maxWidth: 300,
              }}
            >
              <Typography
                sx={{
                  m: 3,
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                  alignContent: "center",
                }}
                variant='h6'
              >
                ¿Está seguro que desea eliminar este Mensajero?
              </Typography>

              <Container
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  alignContent: "flex-end",
                  justifyContent: "center",
                }}
              >
                <Button
                  sx={{
                    backgroundColor: "#252525",
                    color: "white",
                    borderRadius: "10px",
                    m: 1,
                    px: 2,
                    border: 1,
                    borderColor: "#FF9B06",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#A86500",
                    color: "white",
                    borderRadius: "10px",
                    m: 1,
                    px: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                  onClick={handleDelete}
                >
                  Eliminar
                </Button>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}
