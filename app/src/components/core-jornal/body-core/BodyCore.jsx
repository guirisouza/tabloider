import React, {useState, useEffect} from 'react'
import {
    StyledProductContainer, 
    StyledProductCardContainer,
    StyledTag,
    StyledUnityType
} from './style'



function BodyCore(props) {

    useEffect(()=>{
        console.log('BODYCORE PROPS',props)
    },[])

    

    return(
        <StyledProductContainer>
            {   props.products.length > 0 ? (
                    props.products.map((product, index)=>{
                        console.log('PRODUTO ITERATING',product)
                    return(
                        <StyledProductCardContainer key={index}>
                            <p>{product.product}</p>
                            <img src={product.image} alt='teste'/>
                            <StyledTag>
                                <p>R$</p> <p>{product.price.split(',')[0]}</p><p>,{product.price.split(',')[1]}</p>
                            </StyledTag>
                            <StyledUnityType>
                                <p>{product.unityType}</p>
                            </StyledUnityType>
                        </StyledProductCardContainer>
                    )
                })) : ''
            }
        </StyledProductContainer>
    )
}

export default BodyCore