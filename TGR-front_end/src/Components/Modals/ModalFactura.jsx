import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { Factura } from "../../Routes/Factura";

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
        >
          <Grid
            item
            maxHeight={500}
            maxWidth={400}
            sx={{
              p: 4,
              color: "black",
            }}
          >
            <Factura row={row} handleClose={handleClose} />
          </Grid>
        </Grid>
      </Modal>
    </>
  );
}
