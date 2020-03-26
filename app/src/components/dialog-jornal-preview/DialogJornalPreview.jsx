import React, { useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {StyledButtonOk, StyledButtonCancel} from './style'
import JornalGenCore from '../core-jornal/JornalGenCore'

export default function DialogJornalPreview(props) {
    const [open, setOpen] = React.useState(false);

  useEffect(()=>{
    console.log('entrou dialogggggggggg')
    console.log('@@@@@@@@@@@@@@@@@@@@@@', props)
  },[])

  return (
    <div>
      <Dialog open={props.open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Preview</DialogTitle>
        <DialogContent>
          <JornalGenCore state={props}/>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Cancel
          </Button> */}
          <StyledButtonOk onClick={() => {props.handleDialog(false)}} color="primary">
            Corrigir
          </StyledButtonOk>
          <StyledButtonCancel onClick={() => {props.handleDialog(false)}} color="primary">
            Download
          </StyledButtonCancel>
          <StyledButtonCancel onClick={() => {props.handleDialog(false)}} color="primary">
            Compartilhar
          </StyledButtonCancel>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export {DialogJornalPreview};