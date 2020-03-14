import React, {useState, useEffect} from 'react'
import {
    StyledNavBar,
    StyledNavBarNav,
    StyledNavItem,
    StyledNavLink,
    StyledLinkText,
    StyledFaGroup,
    StyledFaPrimary,
    StyledFaSecundary
} from './style'


const SideMenuNavBar = () => {

    return(
        <StyledNavBar>
        <StyledNavBarNav>

            <StyledNavItem>
                <StyledNavLink>
                <img src="https://meujornalzinho.s3-sa-east-1.amazonaws.com/assets/tabloider_icon.png" style={{ marginLeft: '1rem', height: '60px', filter: 'brightness(0) invert(1)'}}/>
                <StyledLinkText>Criar tabloide</StyledLinkText> 
                </StyledNavLink>
            </StyledNavItem>

            <StyledNavItem>
                <StyledNavLink>
                <i class="material-icons">storefront</i>
                <StyledLinkText>Meus tabloides</StyledLinkText> 
                </StyledNavLink>
            </StyledNavItem>

            <StyledNavItem>
                <StyledNavLink>
                <i class="material-icons">edit</i>
                <StyledLinkText>Configurações</StyledLinkText> 
                </StyledNavLink>
            </StyledNavItem>

            <StyledNavItem>
                <StyledNavLink>
                <i class="material-icons">account_circle</i>
                <StyledLinkText>Perfil</StyledLinkText> 
                </StyledNavLink>
            </StyledNavItem>

            <StyledNavItem>
                <StyledNavLink>
                <i class="material-icons">message</i>
                <StyledLinkText>Solicitação</StyledLinkText> 
                </StyledNavLink>
            </StyledNavItem>

            <StyledNavItem>
                <StyledNavLink>
                <i class="material-icons">exit_to_app</i>
                <StyledLinkText>Logout</StyledLinkText> 
                </StyledNavLink>
            </StyledNavItem>
            
          
          </StyledNavBarNav>
        </StyledNavBar>
    )
}

export default SideMenuNavBar