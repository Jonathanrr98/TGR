import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import * as React from "react";

export default function TablaFactura({ row }) {
  const productos = [
    {
      codigo: "APA2141405085-001",
      descripcion: row.Mercancia[0].Descripcion,
      Bultos: row.Mercancia[0].Bultos,
      Peso: row.Mercancia[0].Peso,
      Dueno: row.Mercancia[0].Dueno,
      Estado: row.Mercancia[0].Estado,
      Destinatario: row.Mercancia[0].Destinatario,
    },
  ];

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell>Bultos</TableCell>
            <TableCell>Peso</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Dueño</TableCell>
            <TableCell>Destinatario</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productos.map((producto, index) => (
            <TableRow key={index}>
              <TableCell>
                {producto.codigo}
                <br />
                {producto.descripcion}
              </TableCell>

              <TableCell>{producto.Bultos}</TableCell>
              <TableCell>{producto.Peso}</TableCell>
              <TableCell>{producto.Estado}</TableCell>
              <TableCell>{producto.Dueno}</TableCell>
              <TableCell>{producto.Destinatario}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
