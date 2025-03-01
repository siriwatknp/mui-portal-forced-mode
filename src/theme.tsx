import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#556cd6",
        },
        secondary: {
          main: "#19857b",
        },
        error: {
          main: red.A400,
        },
      },
    },
    dark: true,
  },
});

export default theme;
