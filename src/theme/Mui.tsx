import { createMuiTheme } from "@material-ui/core/styles";

interface IPaletteIntention {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

const inkline = createMuiTheme({
  palette: {
    primary: {
      contrastText: "#F9F9F9",
      dark: "#9C0A02",
      light: "#F9F9F9",
      main: "#9C0A02",
    },
    secondary: {
      main: "#727C82",
    },
  },
});

export default inkline;
