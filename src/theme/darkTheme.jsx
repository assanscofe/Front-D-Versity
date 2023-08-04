import { createTheme, responsiveFontSizes } from "@mui/material";

let darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
  typography: {
    fontFamily: "Roboto,sans-serif",
    h1: {
      fontSize: "4rem",
    },
    h2: {
      fontSize: "3rem",
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.25rem",
    },
    h6: {
      fontSize: "1.125rem",
    },
    button: {
      fontSize: "0.875rem",
    },
    body1: {
      fontSize: "0.875rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
    overline: {
      fontSize: "0.875rem",
      fontWeight: "bold",
      letterSpacing: "0.1rem",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "#121212",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 3,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: "8vh",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: "8vh",
        },
      },
    },
  },
});

darkTheme = responsiveFontSizes(darkTheme);

export default darkTheme;
