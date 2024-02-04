import { createTheme } from "@mui/material";
import { TYPOGRAPHIES, BREAKPOINTS } from "./enums";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#78CEFF",
    },
    secondary: {
      main: "#FFF"
    }
  },
  typography: {
    ...TYPOGRAPHIES,
  },
  breakpoints: {
    values: {
      ...BREAKPOINTS,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "#FFF",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#FFF",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "5px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "5px",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "large",
        color: "primary",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontSize: "18px",
          borderRadius: "5px",
          textTransform: "uppercase",
          boxShadow: "none",
          padding: "14px",
        },
      },
    },
  },
});
