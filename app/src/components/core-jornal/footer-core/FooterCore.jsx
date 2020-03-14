import React, {useState, useEffect} from 'react'
import {
    StyledModuleFooterInside,
    StyledFooterContainer,
    StyledModuleFooterExternal,
    StyledImageFlagContainer,
    StyledModuleFlagFooterExternal,
    StyledTagFooter
} from './style'

function FooterCore(props){

    useEffect(()=>{
        console.log('NOVO MODULO FOOTER', props)
    },[])

    return(
        <StyledFooterContainer>
                            {   props.footer ? (
                                        props.footer.map((moduleFooter, index)=>{
                                            if(moduleFooter.identifier === 'cartoes') {
                                                console.log('PASSOUUUU')
                                                console.log('=====================++>',moduleFooter.value)
                                                return(
                                                    <StyledModuleFlagFooterExternal>
                                                        {
                                                            moduleFooter.value.map((imageUrl, index)=>{
                                                                return(
                                                                    <StyledImageFlagContainer>
                                                                        <img  src={imageUrl}/>
                                                                    </StyledImageFlagContainer>
                                                                )
                                                            })
                                                        }
                                                    </StyledModuleFlagFooterExternal>
                                                )
                                            } else {
                                                console.log('footer ITERATING',moduleFooter)
                                                return(
                                                    <StyledModuleFooterExternal>
                                                        <StyledTagFooter><i class="material-icons">{moduleFooter.icon}</i></StyledTagFooter>
                                                        <StyledModuleFooterInside>
                                                            <p> {moduleFooter.value} </p>
                                                        </StyledModuleFooterInside>
                                                    </StyledModuleFooterExternal>
                                                )
                                            }

                                        })) : ''
                            }
                </StyledFooterContainer>
    )
}

export default FooterCore

