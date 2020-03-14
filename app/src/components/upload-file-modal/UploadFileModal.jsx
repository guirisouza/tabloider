import React, {useState, useEffect} from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const UploadFileModal = () => {
    const [open, setOpen] = React.useState(false);

    const handleClose = (event) => {
      setOpen(false);
    };

    return (
        <div>
          <Dialog open={props.open} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
              <h1>sddsafdsafdsaf</h1>
            </DialogContent>
            <DialogActions>
              {/* <Button onClick={handleClose} color="primary">
                Cancel
              </Button> */}
              <StyledButtonOk onClick={() => {props.handleDialog(false)}} color="primary">
                Fechar
              </StyledButtonOk>
              <StyledButtonCancel onClick={() => {props.handleDialog(false)}} color="primary">
                Escolher
              </StyledButtonCancel>
            </DialogActions>
          </Dialog>
        </div>
      );
}

export default UploadFileModal