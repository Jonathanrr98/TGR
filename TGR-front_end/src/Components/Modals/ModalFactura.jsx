import React, { useState } from "react";
import { Grid } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { Factura } from "../../Routes/Factura";
import Modal from "@mui/material/node/Modal";

export default function ModalFactura({ row }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <DescriptionIcon
          onClick={() => setOpen(true)}
          sx={{
            ":hover": {
              color: "#CF7A17",
              cursor: "pointer",
            },
          }}
        />
      </Grid>

      <Modal
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "auto",
          backgroundColor: "white",
          p: 5,
          height: "100%",
        }}
        open={open}
        onClose={handleClose}
      >
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
          sx={{
            backgroundColor: "white",
            height: "100%",
            width: "100%",
          }}
        >
          <Grid
            item
            sx={{
              p: 3,
              height: "100%",
              overflow: "auto",
              mb: 5,
            }}
          >
            <Factura row={row} handleClose={handleClose} />
          </Grid>
        </Grid>
      </Modal>
    </>
  );
}
