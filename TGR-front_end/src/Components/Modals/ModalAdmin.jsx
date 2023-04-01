import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import { FMAdmin } from "../Formularios_MultiStep/FMAdmin";

export default function ModalAdmin() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid
        sx={{
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            backgroundColor: "#A86500",
            color: "white",
            borderRadius: "24px",
            m: 1,
            px: 2,
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "12px",
          }}
          onClick={handleOpen}
        >
          Crear Administrador
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
            <FMAdmin handleClose={handleClose} />
          </Grid>
        </Grid>
      </Modal>
    </>
  );
}
