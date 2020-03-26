import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {StyledMenuNavBar, StyledOptionsMenuNavBar} from './style'

class MenuNavBar extends Component {
    render() {
        return(
            <>
                <StyledMenuNavBar>
                    <StyledOptionsMenuNavBar>
                        <img style={{height: '100px', marginTop: '20px', filter: ' brightness(0) invert(1)'}} src="https://meujornalzinho.s3-sa-east-1.amazonaws.com/assets/tabloider-logo.png"/>
                        <p><a>home</a></p>
                        <p><a>como funciona</a></p>
                        <p><a>planos</a></p>
                        <Link to='/register'>
                            registre-se
                        </Link>   
                        <Link to='/login'>
                            login
                        </Link>    
                    </StyledOptionsMenuNavBar>
                </StyledMenuNavBar>                   
            </>
        )
    }
}

export default MenuNavBar