import React, { useState } from "react";

import { Grid, Modal } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { FormularioEditarContenedores } from "../Formularios_MultiStep/FormularioEditarContenedores";

const style = {
  top: "50%",
  left: "50%",
  borderRadius: 4,
  width: 400,
  height: 300,
  bgcolor: "#252525",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "#ffff",
};

export const ModalEditarContenedores = ({ row }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  console.log(row);
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
          justifyContent='center'
          alignItems='center'
          style={{ height: "100%" }}
        >
          <Grid
            item
            sx={{
              ...style,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FormularioEditarContenedores handleClose={handleClose} row={row} />
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
};
