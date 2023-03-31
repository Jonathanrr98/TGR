import * as React from "react";

export const FormularioRemitente = () => {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  const ariaLabel = { "aria-label": "description" };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return <div></div>;
};
