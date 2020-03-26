import React from 'react';
import {Redirect} from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {StyledButtonOk, StyledButtonCancel} from './style'

export default function ShowcaseJornalTemaplate(props) {
    const [open, setOpen] = React.useState(false);
    const [redirect, setRedirect] = React.useState(false)

    const HandleChoiceOpen = event => {
      props.handleDialog(false)
      console.log('PASSOUUUUUUUU')
      setRedirect(true)
    }

  return (
    <div>
      {
        redirect && <Redirect to='/product-choice'/>
      }
      <Dialog open={props.open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Quarta Verde</DialogTitle>
        <DialogContent>
          <img  style={{maxHeight: '500px'}} src="https://fake-products.s3-sa-east-1.amazonaws.com/assets/templates/SEXTA-VERDE-MARISTELA+(7).png" alt="teste"/>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Cancel
          </Button> */}
          <StyledButtonOk onClick={() => {props.handleDialog(false)}} color="primary">
            Fechar
          </StyledButtonOk>
          <StyledButtonCancel onClick={HandleChoiceOpen} color="primary">
            Escolher
          </StyledButtonCancel>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export {ShowcaseJornalTemaplate};