import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import IconClient from "../../assets/icons/Clientes.png";
import IconAdmin from "../../assets/icons/Administradores.png";
import IconCSesion from "../../assets/icons/CerrarSesion.png";
import IconContenedores from "../../assets/icons/Contenedores.png";
import IconHBL from "../../assets/icons/HBL.png";
import IconManifiesto from "../../assets/icons/Manifiesto.png";
import IconMensajero from "../../assets/icons/Mensajeros.png";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const Manifiesto = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent='space-between'
        alignItems='center'
      >
        <AppBar
          sx={{ backgroundColor: "#252525", boxShadow: 0 }}
          position='fixed'
          open={open}
        >
          <Toolbar sx={{ backgroundColor: "#252525", boxShadow: 0 }}>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              sx={{
                backgroundColor: "#252525",

                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          PaperProps={{ style: { backgroundColor: "#252525" } }}
          sx={{ backgroundColor: "#3A3A3A" }}
          variant='permanent'
          open={open}
        >
          <DrawerHeader sx={{ backgroundColor: "#252525" }}>
            <IconButton
              sx={{ backgroundColor: "#ffff", p: 0, m: 0 }}
              onClick={handleDrawerClose}
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>

          <List sx={{ backgroundColor: "#252525", color: "#ffff" }}>
            {[
              "Clientes",
              "Mensajeros",
              "Administradores",
              "HBL",
              "Manifiesto",
              "Contenedores",
              "Cerrar Sesión",
            ].map((text, index) => (
              <ListItem
                PaperProps={{ style: { border: 0 } }}
                key={text}
                disablePadding
                sx={{
                  display: "block",
                  backgroundColor: "#252525",

                  borderBlockColor: "#252525",
                  my: 0.8,
                }}
              >
                <Link
                  to={
                    text === "Clientes"
                      ? "/cliente"
                      : text === "Mensajeros"
                      ? "/mensajero"
                      : text === "Administradores"
                      ? "/administrador"
                      : text === "HBL"
                      ? "/hbl"
                      : text === "Manifiesto"
                      ? "/manifiesto"
                      : text === "Contenedores"
                      ? "/contenedores"
                      : "/"
                  }
                  style={{ textDecoration: "none", color: "#ffff" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      maxHeight: 30,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      backgroundColor: "#CF7A171C",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {text === "Clientes" ? (
                        <img src={IconClient} />
                      ) : text === "Manifiesto" ? (
                        <img src={IconManifiesto} />
                      ) : text === "HBL" ? (
                        <img src={IconHBL} />
                      ) : text === "Contenedores" ? (
                        <img src={IconContenedores} />
                      ) : text === "Mensajeros" ? (
                        <img src={IconMensajero} />
                      ) : text === "Administradores" ? (
                        <img src={IconAdmin} />
                      ) : text === "Cerrar Sesión" ? (
                        <img src={IconCSesion} />
                      ) : (
                        <MailIcon />
                      )}
                    </ListItemIcon>

                    <ListItemText
                      primary={text}
                      sx={{
                        m: 1,
                        opacity: open ? 1 : 0,
                      }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Grid
          sx={{
            width: "90%",
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <DrawerHeader />
          <Grid
            container
            spacing={2}
            sx={{
              width: "90%",
              mt: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <main>
              {
                <Button
                  sx={{
                    backgroundColor: "#CF7A17",
                    color: "#ffff",
                    width: "100%",
                    height: "100%",
                    borderRadius: 24,
                  }}
                >
                  Crear Manifiesto
                </Button>
              }{" "}
            </main>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MailIcon;
