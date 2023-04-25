import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import "./Styles/styles.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Routes/Login";

import { LoginRestreador } from "./Routes/LoginRestreador";
import VistaMensajero from "./Routes/Mensajero/VistaMensajero";
import { Administradores_2 } from "./Routes/Admin_Tipo2/Administradores_2";
import { Mensajero2 } from "./Routes/Admin_Tipo2/Mensajero_2";
import { Contenedores_2 } from "./Routes/Admin_Tipo2/Contenedores_2";
import { HBL_2 } from "./Routes/Admin_Tipo2/HBL_2";
import { Manifiesto_2 } from "./Routes/Admin_Tipo2/Manifiesto_2";
import { Administrador } from "./Routes/Admin_Tipo1/Administrador";
import { Cliente } from "./Routes/Admin_Tipo1/Cliente";
import { Mensajero } from "./Routes/Admin_Tipo1/Mensajero";
import { Contenedores } from "./Routes/Admin_Tipo1/Contenedores";
import { HBL } from "./Routes/Admin_Tipo1/HBL";
import { Manifiesto } from "./Routes/Admin_Tipo1/Manifiesto";
import { Vistacliente } from "./Routes/Cliente/VistaCliente";
import { Factura } from "./Routes/Factura";
import Factura2 from "./Factura2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/loginAdministracion",
    element: <Login />,
  },
  {
    path: "/loginRestreador",
    element: <LoginRestreador />,
  },

  //////////////////////Rutas Administrador 2 /////////////////////
  {
    path: "/administrador",
    element: <Administrador />,
  },
  {
    path: "/cliente",
    element: <Cliente />,
  },
  {
    path: "/mensajero",
    element: <Mensajero />,
  },
  {
    path: "/Contenedores",
    element: <Contenedores />,
  },
  {
    path: "/hbl",
    element: <HBL />,
  },
  {
    path: "/manifiesto",
    element: <Manifiesto />,
  },

  ///////////////////////Ruta De Vista de Mensajero
  {
    path: "/vistamensajero",
    element: <VistaMensajero />,
  },

  //////////////////////Rutas Administrador 2 /////////////////////
  {
    path: "/admin2",
    element: <Administradores_2 />,
  },
  {
    path: "/mensajero2",
    element: <Mensajero2 />,
  },
  {
    path: "/manifiesto2",
    element: <Manifiesto_2 />,
  },
  {
    path: "/hbl2",
    element: <HBL_2 />,
  },
  {
    path: "/contenedores2",
    element: <Contenedores_2 />,
  },

  {
    path: "/vistacliente",
    element: <Vistacliente />,
  },

  //Factura
  {
    path: "/factura",
    element: <Factura />,
  },

  //Factura2
  {
    path: "/factura2",
    element: <Factura2 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
