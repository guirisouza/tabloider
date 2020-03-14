import styled from 'styled-components';
import {animated} from 'react-spring'

const StyledScrollerContainer = styled(animated.div)`

    overflow-y:scroll; 
    overflow-x:hidden; 
    max-height: 400px;
    width: 400px;
    cursor: pointer;


    /* width */
    ::-webkit-scrollbar {
    width: 10px;
    }


    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #b3c6ff; 
    border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background:  #b3c6ff; 
    }   

    img {
        max-width: 60%;
        margin-left: 90px;
        margin-top: 8px;
    }

    img:hover {
        border: 1px solid;
        padding: 10px;
        box-shadow: 1px 5px 7px gray;
        transition: 0.2s
    }

`
const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    height: 70vh;
`

const StyledCategoryItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    whidth 100%;
    height: 60px;
    margin-top: 10px;
    margin-left: 9px;
    margin-right: 9px;
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #2267ff 100%);
    cursor: pointer;


    p {
        font-family: 'Comfortaa', cursive;
        font-size: 1.2em;
        margin-left: 15px;
        font-weight: 900;
        color: white;
    }

    :hover {
        border: 1px solid;
        padding: 2px;
        box-shadow: 1px 1px 1px #21D4FD;
        transition: 0.2s
    }

`
const StyledButton = styled.button`
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

const StyledFullContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
`

export {StyledScrollerContainer, StyledContainer, StyledCategoryItem, StyledButton, StyledFullContainer}