import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ls from "local-storage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  spacing: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Trainee Portal
          </Typography>
          <Button component={Link} to="/Trainee" color="inherit">
            Trainee
          </Button>
          <Button component={Link} to="/TextFieldDemo" color="inherit">
            TextFieldDemo
          </Button>
          <Button component={Link} to="/InputDemo" color="inherit">
            InputDemo
          </Button>
          <Button
            component={Link}
            to="/ChildrenDemo"
            color="inherit"
            className={classes.spacing}
          >
            ChildrenDemo
          </Button>
          <Button
            component={Link}
            to="/Login"
            onClick={() => {
              ls.clear("token");
            }}
            color="inherit"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
