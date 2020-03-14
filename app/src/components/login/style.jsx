import styled from 'styled-components';

const StyledContainerLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #f8fc8e;
    background-image: linear-gradient(62deg, #f8fc8e 0%, #ffde59 48%);

    input, select, textarea{
        color: #ffffff;
    }
    
    textarea:focus, input:focus {
        color: #fffff;
    }
    

`

const StyledContainerLoginForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 250px;
    height: 400px;
    background-color: #2267FF;

    input {
        padding-top: 45px;
        padding-bottom: 4px;
    }



`
const StyledLoginTitleContainer = styled.div`
    display: flex;
    width: 80px;
    height: 60px;
    justify-content: center;
    align-items: center;

    > p {
        color: white;
        font-size: 1.3em;
    }

    img {
        height: 40%;
        margin-top: 5px;
        margin-left: 10px;
    }
`

export {StyledContainerLogin, StyledContainerLoginForm, StyledLoginTitleContainer}