import styled from 'styled-components'


const StyledFooterContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-itens: center;

    
`

const StyledModuleFooterExternal = styled.div`
    display: flex;
    width: auto;
    height: auto;
    margin: 10px;
    border-radius: 10px;
    flex-grow: 1;
    justify-content: center;
    background-color: #F4D03F;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    background-image: linear-gradient(132deg, #F4D03F 0%, #16A085 100%);

    :nth-child(1) {white-space: nowrap;}
    :nth-child(2) {white-space: nowrap;}

`

const StyledModuleFooterInside = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 'auto'; 
    height:'auto';
    
    p {
        margin: 0px;
        font-size: 2.3em;
        color: white;
        text-shadow: black 0.1em 0.1em 0.2em;
        margin-right: 10px;
    }

`

const StyledModuleFlagFooterExternal = styled.div`
    
    display: flex;
    max-width: 500px;
    padding:10px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    margin: 5px;
    border-radius: 10px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    background-color: #F4D03F;
    background-image: linear-gradient(132deg, #F4D03F 0%, #16A085 100%);
    flex-grow: 1;
    
`

const StyledImageFlagContainer = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
    width: 70px;
    

    img {
        align-self: center;
        max-width: 100%;
        object-fit: fill;
    }
`
const StyledTagFooter = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    height: 70px;
    width: 70px;
    margin-top: -7%;
    margin-left: -10%;
    border-radius: 100%;
    background-color: #F4D03F;
    background-image: linear-gradient(132deg, #F4D03F 0%, #16A085 100%);
    border: white solid 2px;

    i {
        font-size: 40px;
    }
`

export {
    StyledFooterContainer,
    StyledModuleFooterExternal,
    StyledModuleFooterInside,
    StyledTagFooter,
    StyledImageFlagContainer,
    StyledModuleFlagFooterExternal
}
