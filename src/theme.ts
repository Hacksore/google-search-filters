import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  spacing: 0,
  palette: {
    background: {
      default: "#3c3c3c",
    },
    type: "dark",
    error: {
      main: "#f44336"
    },
    primary: {      
      main: "#674097",
      contrastText: "#fff",
    },
    text: {
      primary: "#fff",
    },
    secondary: {
      light: "#fff",
      main: "#fff",
      contrastText: "#000",
    },
  },
});

theme.spacing(2);

export { theme };
