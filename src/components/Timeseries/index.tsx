import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "80%",
    height: 50,
    display: "flex",
  },
  form: {
    width: 130,
  },
}));

enum GOOGLE_TIME_SPANS {
  ANY = "",
  PAST_YEAR = "tbs=qdr:m12",
  PAST_SIX_MONTHS = "tbs=qdr:m6",
  PAST_MONTH = "tbs=qdr:m",
}

const Timeseries = () => {
  const classes = useStyles();

  const [timespan, setTimespan] = useState("");

  const handleChange = (event: any) => {
    setTimespan(event.target.value);
    console.log(event.target.value);
  };

  return (
    <FormControl classes={{ root: classes.form }}>
      <InputLabel id="demo-simple-select-label">Date Range</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={timespan}
        color="secondary"
        onChange={handleChange}
      >
        <MenuItem value={GOOGLE_TIME_SPANS.ANY}>Any Time</MenuItem>
        <MenuItem value={GOOGLE_TIME_SPANS.PAST_YEAR}>Past 12 Months</MenuItem>
        <MenuItem value={GOOGLE_TIME_SPANS.PAST_SIX_MONTHS}>
          Past Six Months
        </MenuItem>
        <MenuItem value={GOOGLE_TIME_SPANS.PAST_MONTH}>Past Month</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Timeseries;