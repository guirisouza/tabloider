import React, {useState, useEffect} from 'react'
import {StyledContainerStepper, StyledUl,StyledLiStep} from './style'

const Stepper = () => {
    const [count, setCount] = useState(0)

    return(
        <StyledContainerStepper>
            <StyledUl>
                <StyledLiStep>
                    Escolha a categoria do seu tabloide
                </StyledLiStep>
                <StyledLiStep>
                    Agora escolha o tema que mais gostar
                </StyledLiStep>
                <StyledLiStep>
                    excelente!
                </StyledLiStep>
            </StyledUl>
        </StyledContainerStepper>
    )
}

export default Stepper