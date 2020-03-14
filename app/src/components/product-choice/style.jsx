import styled from 'styled-components';

const StyledFullContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height:100vh;
    font-family: 'Comfortaa', cursive;
    align-items: center;

    a:nth-child(3) {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 30px;
            text-decoration: none;
            width: 120px;

            button {
                margin-top: 0px;
                margin-left: 1970px;
            }
    }
`

const StyledAddButton = styled.a`

    i {
        cursor: pointer;
        margin-left: 30px;
        margin-top: 30px;
        font-size: 30px;
        color: #2267ff;

        :hover {
            color: #2267ff;
            text-shadow: 1px 1px 2px #000000;
         }
    }

`

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100%;
    height: 80px;
    

`
const StyledScrollerContainer = styled.div`
    display: ${props => props.styles === true ? 'flex': 'none'};
    margin-top:-50px;
    flex-wrap: wrap;
    overflow-y:scroll; 
    overflow-x:hidden;
    min-height: 300px; 
    max-height: 400px;
    min-width: 160px;
    max-width: 700px;
    background-color: #EBECF0;
    border-top: solid 20px #EBECF0 ;
    border-bottom: solid 20px #EBECF0 ;
    border-radius: 4px;
    

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

`

const StyledProductCard = styled.div`
    position: relative;
    flex-direction: column;
    width: 180px;
    height: 250px;
    -webkit-box-shadow: 2px 3px 4px 1px rgba(117,117,117,0.75);
    -moz-box-shadow: 2px 3px 4px 1px rgba(117,117,117,0.75);
    box-shadow: 2px 3px 4px 1px rgba(117,117,117,0.75);
    margin-bottom: 5px;
    margin-top: 20px;
    border-radius: 4px;
    margin-left:35px;
    text-align: center;
    background-color: #08AEEA;
    background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
    
    


    :hover {
        -webkit-box-shadow: 1px 1px 1px 1px rgba(117,117,117,0.75);
        -moz-box-shadow: 1px 1px 2px 1px rgba(117,117,117,0.75);
        box-shadow: 1px 2px 3px 1px rgba(117,117,117,0.75);
    }

    p {
        color: white;
        font-size: 12px;
    }

    p:nth-child(2) {
        font-size: 1.0em;
        font-weight: 900;
        color: #545454;
        margin-left: 25px;
        padding-top: 5px;
        padding-bottom: 5px;
        background-color: #ffde59;
        border-radius: 5px 0px 0px 5px;
        -webkit-box-shadow: 2px 3px 4px 1px rgba(117,117,117,0.75);
        -moz-box-shadow: 2px 3px 4px 1px rgba(117,117,117,0.75);
        box-shadow: 2px 3px 4px 1px rgba(117,117,117,0.75);
    }

    p:nth-child(3) {
        margin-left: 35px;
        padding-top: 2px;
        padding-bottom: 2px;
        font-weight: 900;
        background-color: #ff5757;
        border-radius: 5px 0px 0px 5px;
        -webkit-box-shadow: 2px 3px 4px 1px rgba(117,117,117,0.75);
        -moz-box-shadow: 2px 3px 4px 1px rgba(117,117,117,0.75);
        box-shadow: 2px 3px 4px 1px rgba(117,117,117,0.75);
    }

    p:nth-child(4) {
        margin-left: 130px;
        padding-top: 2px;
        padding-bottom: 2px;
        font-weight: 900;
        color: #545454;
        background-color: white;
        border-radius: 5px 0px 0px 5px;
        -webkit-box-shadow: 2px 3px 4px 1px rgba(117,117,117,0.75);
        -moz-box-shadow: 2px 3px 4px 1px rgba(117,117,117,0.75);
        box-shadow: 2px 3px 4px 1px rgba(117,117,117,0.75);
    }
`

const StyledContactInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
        width: 500px;
    }
`

const StyledContainerImage =  styled.div`
    display: flex;
    justify-content: center;
    height: 100px;
    width: 100%;
    background: white;
    border-radius: 4px;

    img {
        height: 100%;
        align-self: center;
        margin-right: 50%;
    }


`
const StyledContainerIcon=styled.div`
    position: absolute;
    height 50px;
    width: 100%;
    bottom: 0;

    i {
        color: #2267ff;
    }

    i:first-child {
        font-size: 1.9em;
        position: absolute;
        bottom: 0;
        left: 5px;
        bottom: 7px;
        color: white;
        text-shadow: 1px 1px 2px #000000;
    }

    i:last-child {
        font-size: 1.9em;
        position: absolute;
        bottom: 7px;
        left: 35px;
        color: white;
        text-shadow: 1px 1px 2px #000000;    
    }

    i: hover {
        text-shadow: none;
        cursor: pointer; 
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

const StyledFooterCreatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 200px;
`

export { 
        StyledButton, 
        StyledAddButton, 
        StyledContainerIcon, 
        StyledContainer, 
        StyledScrollerContainer, 
        StyledFullContainer, 
        StyledProductCard, 
        StyledContainerImage,
        StyledFooterCreatorContainer,
        StyledContactInput
    }