import styled from 'styled-components';

const StyledMenuNavBar = styled.nav`
    overflow: hidden;
    display: flex;
    background-color: #2267ff;
    height: 120px;
    width: 100%;
    margin: 0 auto;
    font-family: 'Comfortaa', cursive;
    color: white;





    img:nth-child(1):hover {
        /* Start the shake animation and make the animation last for 0.5 seconds */
        animation: shake 0.5s;
      
        /* When the animation is finished, start again */
        animation-iteration-count: infinite;

    }
    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
      }

`;

const StyledOptionsMenuNavBar = styled.div`
    display: flex;
    align-items: center;
    width:100%;
    
    img {
        margin-left: 7vh;
    }

    p {
        display: inline;
        margin-left: 60px;
        font-size: 1.2em;
        cursor: pointer;
    }


    p:hover {
        color: #ffde59;
        transition: 0.3s;
    }
`


export {StyledMenuNavBar, StyledOptionsMenuNavBar};

