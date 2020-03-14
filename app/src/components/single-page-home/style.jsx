import styled from 'styled-components';

const StyledBody = styled.body`

    ::-webkit-scrollbar {
        width: 0.25rem;
    } 

    ::-webkit-scrollbar-track {
        background: #1e1e24;
    }

    ::-webkit-scrollbar-thumb {
        background: white;
    }

`

const StyledFirstContainer = styled.div`

    display: flex;
    padding-top: 30px;
    justify-content: flex-end;
    width: 100%;
    height: 86vh;
    background-color: #2267ff;
    background-image: url('https://meujornalzinho.s3-sa-east-1.amazonaws.com/assets/background-top.png');
    background-position: -300% -55%;
    background-repeat: no-repeat;
    background-size: 95%;
    margin-top: -40px;

    div {
        color: white;
        width: 600px;
        text-align: right;
        
        > h1 {
            font-size: 3.0em;
            text-align: right;
            margin-right: 100px;
            margin-top: 50px;
            color: white;
            will-change: transform, opacity;
            overflow: hidden;
        }
    
        span {
            color: #ffde59;
        }
    }


`

const BoxTextSpring = styled.div`

`


const StyledTrialBox = styled.div`
    display: flex;
    align-self: flex-end;
    flex-direction: column;
    margin-right: 100px;
    text-align: right;
    margin-bottom: 100px;

    p {
        margin-top: -10px;
    }

    p:first-child {
        text-decoration: underline;
        color: white;
    }

    p:nth-child(2) {
        color: #ffde59;
        font-size: 1.4em;
    }


`
const StyledTopBanner = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;


`
const StyledSecondContainer = styled.div`
    display: flex;
    padding-top: 50px;
    width: 100%;
    height: 90vh;
    background-color: #ffde59;

    h1 {
        display: block;
        width: 550px;
        color: #2267ff;
        font-size: 3.0em;
    }
`

const StyledThirdContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 50px;
    width: 100%;
    height: 90vh;
    background-color: #fffff;
    flex-direction: column;

    p{
        font-family: 'Comfortaa', cursive;
    }

    p:first-child {
        align-self:top;
    }

    div:first-child {
        margin-left: 150px;
    }

    div:last-child {
        margin-right: 150px;
    }
`

const StyledPlanInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 450px;
    background-color: ${props => props.color};
    justify-content: center;
    align-items: center;

    p{
        font-family: 'Comfortaa', cursive;
        color: white;
    }

    img {
        height: 15%;
        object-fit:contain ;
    }
`

const StyledPlanTag = styled.div`
    display: flex;
`

const StyledContractButton = styled.button`
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

const StyledPlans = styled.div`
    display:  flex;
    justify-content: space-around;
    width: 100%;
    height: auto;
`



export {
    StyledFirstContainer, 
    StyledTrialBox, 
    StyledTopBanner, 
    StyledSecondContainer, 
    StyledThirdContainer, 
    StyledPlanInfo,
    StyledPlanTag,
    StyledContractButton,
    StyledPlans,
    BoxTextSpring,
    StyledBody
}