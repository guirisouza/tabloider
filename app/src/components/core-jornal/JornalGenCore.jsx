import React, {useState, useEffect} from 'react'
import FooterCore from './footer-core/FooterCore'
import BodyCore from './body-core/BodyCore'
import HeaderCore from './header-core/HeaderCore'
import {StyledFullContainer} from './style'

function JornalGenCore(props) {

    console.log('entrou');
    
    // React.useEffect(() => {
    //     console.log('PROPSSSSSSSSSSS',props.location.state.products)
    //     console.log('CARRRRRRRRRRRDDD',props.location.state.products.cardFlag)
    //     console.log('FOOTERRR',props.location.state.footer)
    // }, []);


    return (
        <>
            <StyledFullContainer preview="true">
                    <HeaderCore />
                    <BodyCore products={props.location.state.products}/>
                    <FooterCore footer={props.location.state.footer}/>
            </StyledFullContainer>
        </>
    )
}


export default JornalGenCore