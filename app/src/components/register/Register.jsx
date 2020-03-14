import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom';
import {StyledContainerRegister, StyledInput, StyledForm} from './style'
import axios from 'axios'

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
        let isValid = true
        for (var prop in fields ) {
            if(fields[prop].length < 1) {isValid = false}
        }

        if(isValid) {
            axios.post('http://localhost:5000/api/user/signup', {
                email: fields.email,
                password: fields.password,
                name: fields.name
            })
            .then((result)=>{
                setRedirectAccess(true)
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
                            redirectAccess ? <Redirect to={{pathname: "/meus-tabloides", state: {username: fields.name}}}/> : ''
                        }
                    </StyledForm>
                </StyledContainerRegister>
            </>
        )
}

export default Register