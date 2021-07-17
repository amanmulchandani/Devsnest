import React from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";

import Buttons from "../Buttons/Buttons";
const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "500px",
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Box = () => {
  const classes = useStyles();
  return (
    <Container className={classes.main}>
      <Grid container className={classes.main}>
        <Grid item xs={12} className={classes.paper}>
          <Buttons />
        </Grid>
        <Grid item xs={12} className={classes.paper}>
          <Buttons />
        </Grid>
        <Grid item xs={12} className={classes.paper}>
          <Buttons />
        </Grid>
        <Grid item xs={12} className={classes.paper}>
          <Buttons />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Box;
