import styled from 'styled-components'

const StyledHeaderContainer = styled.div`
    position: relative;
    background-image: url('https://meujornalzinho.s3-sa-east-1.amazonaws.com/jornal-teste/header-test.png');
    width: 100%;
    height: 690px;
`

const StyledTitleHeader = styled.div`
    position: absolute;
    display: flex;
    margin-top: -30px;
    font-size: 4.8em;
    font-family: 'Pacifico', cursive;
    transform: rotate(-20deg);
    color: #b73b1b;
    font-weight: 400;
    text-shadow: -1px 0 white, 0 4px white, 4px 0 white, 0 -1px white;
    text-decoration: underline;

    p:nth-child(2){
        color: green;
    }
    
`

const StyledLogoContainer = styled.div`
    position: absolute;
    width: 450px;
    height: 450px;
    right: 0;

    img{
        height: 100%;
        -webkit-filter: drop-shadow(3px 1px 0 10px #fff);
        filter: drop-shadow(3px 1px 0 10px #fff);
    }
`


export {
    StyledHeaderContainer,
    StyledTitleHeader,
    StyledLogoContainer,
}