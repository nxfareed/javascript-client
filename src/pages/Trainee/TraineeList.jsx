import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles, Button } from "@material-ui/core";
import AddDialog from "./Components/AddDialog/AddDialog";
import trainee from "./data/trainee";
import Table from "./Components/Table/Table";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    margin: theme.spacing(2, 0, 2),
  },
});

class Trainee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  openDialog = (status) => {
    this.setState({ open: status });
  };

  onSubmit = (data) => {
    this.setState({ open: false }, () => {
      console.log(data);
    });
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;

    return (
      <>
        <div className={classes.root}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => this.openDialog(true)}
          >
            ADD TRAINEE
          </Button>
        </div>
        <Table
          id="id"
          data={trainee}
          columns={[
            {
              field: "name",
              label: "Name",
              align: "center",
            },
            {
              field: "email",
              label: "Email Address",
            },
          ]}
        />
        <Button
          variant="outlined"
          color="primary"
          onClick={() => this.openDialog(true)}
        >
          ADD TRAINEE
        </Button>
        <AddDialog
          onClose={() => this.openDialog(false)}
          onSubmit={() => this.onSubmit}
          open={open}
        />
        <ul>
          {trainee &&
            trainee.length &&
            trainee.map((element) => (
              <Fragment key={element.id}>
                <li key={element.id}>
                  <Link to={`/Trainee/${element.id}`}>{element.name}</Link>
                </li>
              </Fragment>
            ))}
        </ul>
      </>
    );
  }
}
Trainee.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default withStyles(useStyles)(Trainee);
