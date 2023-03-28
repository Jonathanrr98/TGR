import { createTheme } from "@mui/material";

const Colors = {
  background: "#252525",
  orange: "#CF7A17",
  grey: "#3A3A3A",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.background,
    },

    secondary: {
      main: Colors.grey,
    },

    orange: {
      main: Colors.orange,
    },
  },
});

export default theme;
