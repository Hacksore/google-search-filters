import React from "react";
import {
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { theme } from "../../theme";
import SitePicker from "../../components/SitePicker";
// import Timeseries from "../../components/Timeseries";


const useStyles = makeStyles((theme) => ({
  main: {
    width: "80%",
    height: 50,
    display: "flex",
  },
  form: {
    width: 130
  }
}));


const Inject = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.main}>
        {/* <Timeseries /> */}
        <SitePicker />
      </div>
    </ThemeProvider>
  );
};

export default Inject;
