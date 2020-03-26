import React, {useState, useEffect} from 'react'
import {StyledContainerStepper, StyledUl,StyledLiStep} from './style'

const Stepper = (props) => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
    
    console.log(props)


    },[props.step.step])

    const stepperLoop = () => {



    }

    return(
        <StyledContainerStepper>
            <StyledUl>
                {
                    props.step.steps.map((step)=>{
                        return(
                            <StyledLiStep>
                                {step}
                            </StyledLiStep>
                        )
                    })
                }
            </StyledUl>
        </StyledContainerStepper>
    )
}

export default Stepper