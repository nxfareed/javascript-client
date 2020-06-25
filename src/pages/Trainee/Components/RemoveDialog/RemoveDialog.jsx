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

const useStyles = () => ({
  root: {
    flexGrow: 1,
  },
});

function RemoveDialog(props) {
  const { open, onClose, onSubmit, data, classes } = props;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
      fullWidth
    >
      <DialogTitle id="form-dialog-title">Remove Trainee</DialogTitle>
      <DialogContent className={classes.useStyles}>
        <DialogContentText>
          Do you really want to remove this item?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() =>
            onSubmit({
              data,
            })
          }
          color="primary"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default withStyles(useStyles)(RemoveDialog);

RemoveDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};
