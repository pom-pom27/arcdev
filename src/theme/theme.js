import { createMuiTheme } from "@material-ui/core/styles";

const blue = "#0072B9";
const orange = "#FFBA60";

export const theme = createMuiTheme({
  palette: { primary: { main: blue }, secondary: { main: orange } },
  typography: {
    fontSize: 10,
    tab: {
      fontFamily: "Raleway",
      fontWeight: 700,
      textTransform: "none",
      fontSize: "0.8rem",
    },
  },
});
