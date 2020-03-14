import React, {useEffect}from 'react'
import MenuNavBar from '../menu-nav-bar/MenuNavBar'
import { useSpring, animated } from 'react-spring'
import {StyledFirstContainer, StyledBody, BoxTextSpring, StyledTrialBox, StyledTopBanner, StyledSecondContainer, StyledThirdContainer, StyledPlanInfo, StyledPlanTag, StyledContractButton, StyledPlans} from './style'

const SinglePageHome = () => {

    const [state, setState] = React.useState({
        plans:[
            {name: 'BÁSICO', price: '19', color: '#2267FF', img: 'https://meujornalzinho.s3-sa-east-1.amazonaws.com/assets/rocket.png' },
            {name: 'INTERMEDIÁRIO', price: '29', color: '#43AF15', img: 'https://meujornalzinho.s3-sa-east-1.amazonaws.com/assets/work.png'  },
            {name: 'PREMIUM', price: '59', color: '#FF914D', img: 'https://meujornalzinho.s3-sa-east-1.amazonaws.com/assets/rocket+(1).png' }
         ],
     animatedFlags: [
         {textFirstAppear: false}
     ]
    })

    const fade = useSpring({
        from: {opacity: 0},
        to: {opacity: 1}
    })
    

    return(
        <>
            <StyledBody>
            <MenuNavBar>
            </MenuNavBar>
            <StyledFirstContainer>
                <StyledTopBanner>
                    <animated.div className="reset" style={fade}> 
                        <h1>criar seus jornais de <span>promoção</span> nunca foi tão fácil!</h1>
                    </animated.div>
                    <StyledTrialBox>
                    <animated.p style={fade}><a>testar gratuitamente</a></animated.p>
                        <animated.p style={fade}>POR 7 DIAS!</animated.p>
                    </StyledTrialBox>
                </StyledTopBanner>    
            </StyledFirstContainer>
            
            <StyledSecondContainer>
                <h1>Escolha seus produtos, coloqueo os preços e pronto, seu jornal de promoção está pronto pra ser compartilhado como quiser!</h1>
            </StyledSecondContainer>

            <StyledThirdContainer>
                <p>ESCOLHA O PLANO QUE MELHOR SE ENCAIXA COM SEU DIA-A-DIA</p>
                <StyledPlans>
                {
                    state.plans.map((plan, i)=>{
                        return (
                                <StyledPlanInfo key={i} color={plan.color}>
                                    <p>{plan.name}</p> 
                                    <img src={plan.img} alt={plan.name}/>
                                    <StyledPlanTag>
                                        <p>R$</p>
                                        <p>{plan.price}</p>
                                        <p>,90</p>
                                    </StyledPlanTag>
                                    <StyledContractButton>CONTRATAR</StyledContractButton>
                                </StyledPlanInfo>
                                )
                    })
                }
                </StyledPlans>
                <p>SEM CONTRATOS, SEM COMPLICAÇÕES, CANCELE QUANDO QUISER</p>
            </StyledThirdContainer>
            </StyledBody>
        </>
    )
}

export default SinglePageHome