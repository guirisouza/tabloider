import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {StyledButtonOk, StyledButtonCancel} from './style'

export default function ShowcaseJornalTemaplate(props) {
    const [open, setOpen] = React.useState(false);

    // // const handleClickOpen = () => {
    // //   setOpen(true);
    // // };

    const handleClose = (event) => {
      setOpen(false);
    };

  return (
    <div>
      <Dialog open={props.open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <img  style={{maxHeight: '500px'}} src="https://fake-products.s3-sa-east-1.amazonaws.com/assets/templates/QUARTA-DO-LEITE-MARISTELA+(4).png" alt="teste"/>
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

export {ShowcaseJornalTemaplate};