import React from "react";
import { Link, Box, Typography } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {" © "}
      <Link color="inherit" href="https://successive.tech">
        Successive Technology
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box mt={8}>
      <Copyright />
    </Box>
  );
}
