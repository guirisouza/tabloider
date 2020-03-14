import React, {useState, useEffect} from 'react'
import {StyledScrollerContainer, StyledContainer, StyledCategoryItem, StyledFullContainer} from './style'
import ShowcaseJornalTemplate from '../dialog/ShowcaseJornalTemplate'
import Stepper from '../stepper/Stepper'
import {useSpring, animated} from 'react-spring'
import axios from 'axios'
import SideMenuNavBar from '../side-menu-nav-bar/SideMenuNavBar'

const CategoryChoice = (props) => {


    const [chosenCategory, setChosenCategory] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    const [isToggled, setToggled] = useState(false)
    const fade = useSpring({
        opacity: isToggled ? 1:0
    })
    

    useEffect(()=>{
        console.log(props.children)
        axios.get('http://localhost:5000/api/product')
        .then(response => {
                localStorage.setItem('products', JSON.stringify(response.data.data))
        });

        axios.get('http://localhost:5000/api/credit-card')
        .then(response => {
                localStorage.setItem('credit-card', JSON.stringify(response.data.data))
        })
    },[])

    const handleChosen = (event) => {
        setChosenCategory(!chosenCategory)
        setToggled(!isToggled)
    }

    const handleDialog = () => {
        setShowDialog(!showDialog)
    }

        return (
            <>
            
            <StyledFullContainer>
            <Stepper  />
            <SideMenuNavBar></SideMenuNavBar>
        
            <StyledContainer>
                <ShowcaseJornalTemplate open={showDialog} handleDialog={handleDialog}/>
                <StyledScrollerContainer>
                    <StyledCategoryItem onClick={handleChosen}><p>Hortifruti</p></StyledCategoryItem>
                    <StyledCategoryItem><p>Carne</p> </StyledCategoryItem>
                    <StyledCategoryItem><p>Mercearia</p></StyledCategoryItem>
                    <StyledCategoryItem><p>Farmácia</p></StyledCategoryItem>
                    <StyledCategoryItem><p>Temáticos</p></StyledCategoryItem>
                </StyledScrollerContainer>
                {
                    chosenCategory ? (
                        <StyledScrollerContainer style={fade}>
                            <a onClick={()=> {handleDialog()}}><img src="https://fake-products.s3-sa-east-1.amazonaws.com/assets/templates/Layout+Novo-FDS+(2).png" alt="teste"/></a>
                            <img src="https://fake-products.s3-sa-east-1.amazonaws.com/assets/templates/QUARTA-DO-LEITE-MARISTELA+(4).png" alt="teste"/>
                            <img src="https://fake-products.s3-sa-east-1.amazonaws.com/assets/templates/QUINTA-DA-CARNE+(1).png" alt="teste"/>
                            <img src="https://fake-products.s3-sa-east-1.amazonaws.com/assets/templates/SEXTA-VERDE-MARISTELA+(2).png" alt="teste"/>
                            <img src="https://fake-products.s3-sa-east-1.amazonaws.com/assets/templates/WhatsApp+Image+2019-07-22+at+9.18.06+PM.jpeg" alt="teste"/>
                        </StyledScrollerContainer>
                    ) :('')
                } 
            </StyledContainer>
            </StyledFullContainer>
            </>
        )
}

export default CategoryChoice