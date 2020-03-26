import styled from 'styled-components';

const StyledNavBar = styled.nav`
    width: 5rem;
    position: fixed;
    height: 100vh;
    background-color: #2267ff;
    background-image: linear-gradient(164deg, #2267ff 0%, #4bb9fb 100%);    
    transition: width 150ms ease;




    :hover {
        width: 16rem;
    }

    :hover span {
        display: block;
    }



`

const StyledNavBarNav = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`

const StyledNavItem = styled.li`
    width: 100%;

    :last-child {
        margin-top: auto;
    }

    :first-child {
        :hover span{
            animation: shake 0.5s alternate;
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
    }


    img:hover {
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
`
const StyledNavLink = styled.a`
    display: flex;
    align-items: center;
    height: 5rem;
    color: white;
    filter: grayscale(100%) opacity(1);
    transition: 600ms;
    cursor: pointer; 
    
    i {
        font-size: 35px;
        margin-left: 1rem;
    }

    :hover {
        filter: grayscale(0%) opacity(1);
        background:  #2267ff;
        color: #ffde59;
    }

    svg {
        width: 2rem;
        min-width: 2rem;
        margin: 0 1.5rem;
      }
`

const StyledLinkText = styled.span`
    display: none;
    margin-left: 1rem;

`

const StyledFaGroup = styled.g`

`

const StyledFaPrimary = styled.path`
    color: #ff7eee;
`

const StyledFaSecundary = styled.path`
    color: #df49a6;
`

export {
    StyledNavBar,
    StyledNavBarNav,
    StyledNavItem,
    StyledNavLink,
    StyledLinkText,
    StyledFaGroup,
    StyledFaPrimary,
    StyledFaSecundary
}