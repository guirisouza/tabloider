import styled from 'styled-components';

const StyledInput = styled.input`
    border: 0;
    border-bottom: solid 1px white;
    outline:none;
    background: transparent;
    font-family: 'Comfortaa', cursive;

    ::placeholder {
        color:white
    }

`

const StyledButton = styled.button`
    background-color: white;
    font-family: 'Comfortaa', cursive;
    color: #2267ff;
    height: 35px;
    width: 120px;
    border: none;
    font-size: 1.0em;
    margin-top:80px;

    :hover {
        background-color: #ffde59;
        transition: 0.3s;
    }
`

export {StyledInput, StyledButton}