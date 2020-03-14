import React, {Component} from 'react'
import {StyledContainerLogin, StyledContainerLoginForm, StyledLoginTitleContainer} from './style'
import {StyledButton, StyledInput} from '../styled-components/style'

class Login extends Component {
    render() {
        return(
            <React.Fragment>
                <StyledContainerLogin>
                    <StyledContainerLoginForm>
                        <StyledLoginTitleContainer>
                            <p>login</p>
                            <img alt="login" src="https://meujornalzinho.s3-sa-east-1.amazonaws.com/assets/login.png" />
                        </StyledLoginTitleContainer>
                        <StyledInput type="input" class="form__field" placeholder="login" name="name" id='name' required />
                        <StyledInput type="password" class="form__field" placeholder="senha" name="name" id='name' required />
                        <StyledButton>entrar</StyledButton>
                    </StyledContainerLoginForm>
                </StyledContainerLogin>
            </React.Fragment>
        )
    }
}

export default Login