import { Button, Grid, Modal } from "@mui/material";
import React from "react";
import { FMAdmin } from "../Formularios_MultiStep/FMAdmin";
import EditIcon from "@mui/icons-material/Edit";
import { FormularioEditarAdministrador } from "../Formularios_MultiStep/FormularioEditarAdministrador";

export const ModalEditarAdmin = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          sx={{
            ":hover": {
              color: "#CF7A17",
              cursor: "pointer",
            },
          }}
          onClick={handleOpen}
        >
          editar
        </EditIcon>
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
            <FormularioEditarAdministrador handleClose={handleClose} />
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
};
