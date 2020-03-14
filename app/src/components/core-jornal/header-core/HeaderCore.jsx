import React, {useState, useEffect} from 'react'
import {
    StyledHeaderContainer, 
    StyledTitleHeader,
    StyledLogoContainer
} from './style'

function HeaderCore() {

    return(
        <StyledHeaderContainer>
            <StyledTitleHeader><p>Quarta</p> <p>Verde</p></StyledTitleHeader>
            <StyledLogoContainer>
                <img src="https://meujornalzinho.s3-sa-east-1.amazonaws.com/jornal-teste/teste.png"alt="teste" />
            </StyledLogoContainer>
        </StyledHeaderContainer>
    )
}

export default HeaderCore