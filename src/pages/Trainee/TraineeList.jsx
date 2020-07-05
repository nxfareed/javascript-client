import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ls from "local-storage";
import { AddDialog, EditDialog, RemoveDialog, Table } from "./Components";
import trainee from "./data/trainee";
import moment from "moment";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import callApi from "../../libs/utils/callApi";
import { MyContext } from "./../../contexts";

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
      editOpen: false,
      removeOpen: false,
      orderBy: "",
      order: "asc",
      page: 0,
      rowsPerPage: 10,
      newData: {},
      rowData: [],
      loading: true,
      count: 0,
      message: "",
    };
  }

  openDialog = (status) => {
    this.setState({ open: status });
  };

  onSubmit = (data) => {
    this.setState({ open: false, editOpen: false }, () => {
      console.log("Submit Item", data);
    });
  };

  handleSort = (field) => () => {
    const { order } = this.state;
    this.setState({
      orderBy: field,
      order: order === "asc" ? "desc" : "asc",
    });
  };

  handleSelect = (data) => {
    console.log(data);
  };

  handleClose = (data, status) => {
    this.setState({ editOpen: status, removeOpen: status });
  };

  handleDeleteClick = (values) => {
    this.setState({ removeOpen: false });
    console.log("Deleted Items", values.data);
  };

  handleEditDialogOpen = (data) => {
    this.setState({ editOpen: true, newData: data });
  };

  handleRemoveDialogOpen = (data) => {
    this.setState({ removeOpen: true, newData: data });
  };

  handleChangePage = (event, newPage) => {
    this.componentDidMount(newPage);
    this.setState({
      page: newPage,
      loading: true,
    });
  };

  handleChangeRowsPerPage = (event) => {
    this.componentDidMount();
    this.setState({
      rowsPerPage: event.target.value,
      page: 0,
    });
  };

  handleFormat = (date) => moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");

  componentDidMount = (newPage) => {
    const { rowsPerPage } = this.state;
    const value = this.context;
    callApi("get", "/trainee", {
      params: {
        skip: newPage * rowsPerPage,
        limit: newPage * rowsPerPage + rowsPerPage,
      },
      headers: {
        Authorization: ls.get("token"),
      },
    }).then((res) => {
      if (res.data === undefined) {
        this.setState(
          {
            loading: false,
            message: "This is an error",
          },
          () => {
            const { message } = this.state;
            value.openSnackBar(message, "error");
          }
        );
      } else {
        this.setState({
          rowData: res.data.records,
          count: res.data.count,
          loading: false,
        });
      }
    });
  };

  render() {
    const {
      open,
      order,
      orderBy,
      page,
      rowsPerPage,
      editOpen,
      removeOpen,
      newData,
      rowData,
      loading,
      count,
    } = this.state;

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
          data={rowData}
          columns={[
            {
              field: "name",
              label: "Name",
              align: "center",
            },
            {
              field: "email",
              label: "Email Address",

              format: (value) => value && value.toUpperCase(),
            },
            {
              field: "createdAt",
              label: "Date",
              format: this.handleFormat,
            },
          ]}
          action={[
            {
              label: "editIcon",
              icon: <EditIcon />,
              handler: this.handleEditDialogOpen,
            },
            {
              label: "deleteIcon",
              icon: <DeleteIcon />,
              handler: this.handleRemoveDialogOpen,
            },
          ]}
          orderBy={orderBy}
          order={order}
          onSort={this.handleSort}
          onSelect={this.handleSelect}
          count={100}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
          onChangePage={this.handleChangePage}
          loading={loading}
        />

        <AddDialog
          data={newData}
          onClose={() => this.openDialog(false)}
          onSubmit={() => this.onSubmit}
          open={open}
        />
        <EditDialog
          data={newData}
          onClose={() => this.handleClose(false)}
          onSubmit={this.onSubmit}
          open={editOpen}
        />
        <RemoveDialog
          data={newData}
          onClose={() => this.handleClose(false)}
          onSubmit={this.handleDeleteClick}
          open={removeOpen}
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

Trainee.contextType = MyContext;

export default withStyles(useStyles)(Trainee);
