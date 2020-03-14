import styled from 'styled-components';


const StyledButtonCancel = styled.button`
    border: 0px;
    border-radius: 3px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    color: white;
    height: 48px;
    padding: 0 30px;
    margin-top: 10px;
    cursor: pointer;
    background-color: #08AEEA;
    background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);

`

const StyledButtonOk = styled.button`
    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
    border: 0px;
    border-radius: 3px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    color: white;
    height: 48px;
    padding: 0 30px;
    margin-top: 10px;
    cursor: pointer;
`

export {StyledButtonOk, StyledButtonCancel}