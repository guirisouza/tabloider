import styled from 'styled-components';

const StyledContainerRegister = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100vh;
    background-color: #32328c;
    background-image: linear-gradient(270deg, #32328c 0%, #2267ff 99%);

    img {
        height: 80%;
    }

    .material-icons {
        font-size: 53px;
        color: white;
        margin-top: 430px;
    }

    input, select, textarea{
        color: #ffffff;
    }
    
    textarea:focus, input:focus {
        color: #fffff;
    }


`
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
const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    padding-left: 10px;

    p {
        color:white;
        font-size: 1.3em;
        margin-bottom: 60px;
    }

    input {
        padding-top: 20px;
        padding-bottom: 4px;
    }

    button {
        background-color: white;
        font-family: 'Comfortaa', cursive;
        color: #2267ff;
        height: 35px;
        width: 120px;
        border: none;
        font-size: 1.0em;
        margin-top:80px;
    }

    button:hover {
        background-color: #ffde59;
        transition: 0.3s;
    }

    
`


export {StyledContainerRegister, StyledInput, StyledForm}