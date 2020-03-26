import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom';
import {StyledContainerRegister, StyledInput, StyledForm} from './style'
import axios from 'axios'
import {api} from '../../apiEnvironment'

function Register() {

    const [fields, setFields] = useState({
        name:'',
        email:'',
        password:''
    })

    const [redirectAccess, setRedirectAccess] = useState(false)

    const handleEmail = (event) => {
        setFields({...fields, email: event.target.value})
    }

    const handleName = (event) => {
        setFields({...fields, name: event.target.value})
    }

    const handlePassword = (event) => {
        setFields({...fields, password: event.target.value})
    }

    const handleSubmit = () => {
        console.log('ENVIIIIII', process.env.REACT_APP_API_URL)
        let isValid = true
        for (var prop in fields ) {
            if(fields[prop].length < 1) {isValid = false}
        }

        if(isValid) {
            api.post(`api/user/signup`, {
                email: fields.email,
                password: fields.password,
                name: fields.name
            })
            .then((result)=>{
                setRedirectAccess(true)
                localStorage.setItem('cli_id', result.data.clientId)
            })
            .catch((err)=>{
                console.log('Não deu amigão', err.response)
            })
        } else {
            console.log('preencha todos os campos')
        }

    }

        return(
            <>
                <StyledContainerRegister>
                    <img src="https://meujornalzinho.s3-sa-east-1.amazonaws.com/assets/background-register.png" alt="cadastro"/>
                    <StyledForm>
                        <p>Crie sua conta</p>

                        <StyledInput type="input" class="form__field" placeholder="Nome" name="name" onChange={handleName} required/>

                        <StyledInput type="input" class="form__field" placeholder="E-mail" name="email" onChange={handleEmail} required/>

                        <StyledInput type="password" class="form__field" placeholder="Senha" name="password" onChange={handlePassword} required/>

                        <button onClick={handleSubmit}>Entrar</button>

                        {
                            redirectAccess ? <Redirect to={{pathname: "/home", state: {username: fields.name}}}/> : ''
                        }
                    </StyledForm>
                </StyledContainerRegister>
            </>
        )
}

export default Register