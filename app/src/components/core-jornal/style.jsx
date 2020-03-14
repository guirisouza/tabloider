import styled, { css } from 'styled-components';
import { style } from '@material-ui/system';

const StyledFullContainer = styled.div`
    width: 1519px;
    border: solid 1px red;
    font-family: 'Indie Flower', cursive;

    ${props => props.preview && css `
        margin: 0 auto;
        zoom: 100%;
    `};

`



{/* <div style={{display: 'flex', width: 'auto', height:'auto', margin: '5px', background: 'black', flexGrow: '1', justifyContent: 'center'}}>
<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 'auto', height:'auto'}}><p style={{margin: '0px', fontSize: '2.3em', color: 'white'}}>TEL: 2233 1512</p><br/><p style={{margin: '0px', fontSize: '2.3em', color: 'white'}}>TEL: 2233 1512</p></div>
</div> */}



export {
        StyledFullContainer,
    }