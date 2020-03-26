import styled from 'styled-components'

const StyledContainerStepper = styled.div`
    width: 100vh;
    align-self: center;

`

const StyledUl = styled.ul`
    display: flex;
    justify-content: center;
    counter-reset:  step;

    li:before {
        content: counter(step);
        counter-increment: step;
        width: 30px;
        height: 30px;
        border: 1px solid #ddd;
        display: block;
        text-align: center;
        margin: 0 auto 10px auto;
        border-radius: 50%;
        line-height: 30px;
        background-color: white;
    }

    li:after {
        content: '';
        position: absolute;
        width:100%;
        height: 1px;
        background-color: #ddd;
        top: 15px;
        left: -50%;
        z-index: -1;
    }

    li:first-child:after {
        content:none;
    }

    li {
        list-style-type: none;
        color: green;
        float: left;
        width: 33.33%;
        position: relative;
        text-align: center;
    }
`

const StyledLiStep = styled.li`

`

export {StyledContainerStepper, StyledUl,StyledLiStep}