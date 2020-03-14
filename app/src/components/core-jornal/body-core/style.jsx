import styled from 'styled-components'

const StyledProductCardContainer = styled.div`
    position: relative;
    margin-left: 100px;
    margin-top: 30px;
    background-image: url('https://fake-products.s3-sa-east-1.amazonaws.com/jornal-teste/card-background.png');
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: 50%;
    border-radius: 20px;
    width: 370px;
    height: 370px;
    background-color: #fadf70;
    text-align: center;
    color: #b73b1b;

    
    img {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto; 
        margin-right: auto;
        margin-top: auto;
        margin-bottom: auto;
        position: absolute;
        height: 70%;
    }

    >p:nth-child(1){
        position: absolute;
        margin-top: -5px;
        width: 100%;
        font-size: 2.8em;
    }

`

const StyledProductContainer = styled.div`
    display: flex;
    padding-bottom: 30px;
    justify-content: center;
    flex-wrap: wrap;
    background-image: url('https://meujornalzinho.s3-sa-east-1.amazonaws.com/jornal-teste/background-jornal.png');
    background-repeat: repeat-y;
    width: 100%;
`

const StyledUnityType = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    alogn0items: center;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    background-color: red;
    bottom: 0;
    margin-bottom: -25px;
    left: 70%;
    background-color: #b73b1b;
    
    >p {
        color: white;
        font-family: 'Pacifico', cursive;
        align-self: center;
        font-size: 1.2em;
    } 
`

const StyledTag = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    justify-content: center;
    align-items: center;
    height: 70px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: -15px;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto;
    width: 60%;
    background-color: #b73b1b;
    border-radius: 40px;
    font-family: 'Pacifico', cursive;
    color: #fadf70;
    padding-bottom: 10px;

  


    p{
        text-shadow: 3px 5px 2px #474747;
    }

    p:nth-child(1) {
        font-size: 30px;
    }
    p:nth-child(2) {
        font-size: 80px;
    }
    p:nth-child(3) {
        font-size: 30px;
    }


`

export { 
    StyledTag,
    StyledUnityType,
    StyledProductContainer,
    StyledProductCardContainer
}