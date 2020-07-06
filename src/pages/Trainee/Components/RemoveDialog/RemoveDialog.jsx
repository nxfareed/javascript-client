import React from "react";
import Button from "@material-ui/core/Button";
import {
  withStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import PropTypes from "prop-types";
import * as moment from "moment";
import { MyContext } from "../../../../contexts/SnackBarProvider/SnackBarProvider";
import callApi from "../../../../libs/utils/callApi";
import ls from "local-storage";
import CircularProgress from "@material-ui/core/CircularProgress";

class RemoveDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    const {
      onClose,
      open,
      data,
      onSubmit,
      loading: { loading },
    } = this.props;
    const { originalId: id } = data;
    return (
      <div>
        <Dialog
          open={open}
          onClose={onClose}
          aria-labelledby="form-dialog-title"
          fullWidth
        >
          <DialogTitle id="form-dialog-title">Remove Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you really want to remove this item?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                onSubmit({ id });
              }}
              disabled={loading}
            >
              {loading && <CircularProgress size={15} color="inherit" />}
              {loading && <span>Deleting</span>}
              {!loading && <span>Delete</span>}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };
}
export default RemoveDialog;

RemoveDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
