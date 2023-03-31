import * as React from "react";
import Button from "@mui/material/Button";

import { Grid, Modal } from "@mui/material";
import FormMultiStep from "./FormClienteMS";
import FormContenedores from "./FormContenedores";

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

export default function ModalContenedores({ text }) {
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
        <Button
          sx={{
            backgroundColor: "#A86500",
            color: "white",
            borderRadius: "24px",
            m: 1,
            px: 2,

            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            fontWeight: "bold",
            fontSize: "12px",
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
            <FormContenedores />
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}
