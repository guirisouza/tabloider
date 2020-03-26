import React, {useState, useEffect} from 'react'
import {StyledScrollerContainer, StyledContainer, StyledCategoryItem, StyledFullContainer} from './style'
import ShowcaseJornalTemplate from '../dialog/ShowcaseJornalTemplate'
import Stepper from '../stepper/Stepper'
import {useSpring, animated} from 'react-spring'
import axios from 'axios'
import SideMenuNavBar from '../side-menu-nav-bar/SideMenuNavBar'
import {api} from '../../apiEnvironment'

const CategoryChoice = (props) => {


    const [chosenCategory, setChosenCategory] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    const [isToggled, setToggled] = useState(false)
    const [step, setStep] = useState(1)
    const [steps, setSteps] = useState(['Escolha uma categoria para seu tabloide'])
    const fade = useSpring({
        opacity: isToggled ? 1:0
    })
    

    useEffect(()=>{
        console.log(props.children)
        api.get('api/product')
        .then(response => {
                localStorage.setItem('products', JSON.stringify(response.data.data))
        });

        api.get('api/credit-card')
        .then(response => {
                localStorage.setItem('credit-card', JSON.stringify(response.data.data))
        })
    },[])


    const handleStep = () => {
            setSteps([...steps, 'Agora escolha o tema do tabloide '])   
        
    }

    const handleChosen = async (event) => {
        await setStep(step+1)
        await setChosenCategory(!chosenCategory)
        await setToggled(!isToggled)
        await handleStep()
    }

    const handleDialog = () => {
        setShowDialog(!showDialog)
    }

        return (
            <>
            
            <StyledFullContainer>
            <Stepper  step={{step: step, steps}}/>
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
                            <a onClick={()=> {handleDialog()}}><img src="https://fake-products.s3-sa-east-1.amazonaws.com/assets/templates/SEXTA-VERDE-MARISTELA+(7).png" alt="teste"/></a>
                            <img src="https://fake-products.s3-sa-east-1.amazonaws.com/assets/templates/horti-1.png" alt="teste"/>

                        </StyledScrollerContainer>
                    ) :('')
                } 
            </StyledContainer>
            </StyledFullContainer>
            </>
        )
}

export default CategoryChoice