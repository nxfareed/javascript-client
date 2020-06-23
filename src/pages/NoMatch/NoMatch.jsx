import React from "react";
import {
  makeStyles,
  CssBaseline,
  Container,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));

export default function NoMatch() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          NOT FOUND
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Seems like the page you are looking after does not found
        </Typography>
      </Container>
    </div>
  );
}
