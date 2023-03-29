import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import "./Styles/styles.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Routes/Login";

import { Administrador } from "./Routes/Administrador";
import { Cliente } from "./Routes/Cliente";
import { Mensajero } from "./Routes/Mensajero";
import { Contenedores } from "./Routes/Contenedores";
import { HBL } from "./Routes/HBL";
import { LoginRestreador } from "./Routes/LoginRestreador";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
