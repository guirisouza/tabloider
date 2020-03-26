import React, {useState, useEffect} from 'react'
import SideMenuNavBar from '../side-menu-nav-bar/SideMenuNavBar';
import Upload from '../upload/Upload'
import {StyledButton} from '../product-choice/style'
import Dropzone from 'react-dropzone'
import axios from 'axios'

import {
    StyledFullContainer,
    StyledContainerAvatar,
    StyledButtonEdit,
    StyledContainerConfigs
} from './style'
 

const Configuration = (props) => {
    const [selectedFile, setSelectedFile] = useState(null)

    const fileSelectedHandler = (event) => {
        console.log(event.target.files[0])
        setSelectedFile(event.target.files[0])
    }

    const submitFileUpload = (event) => {
        axios.post('http://localhost:5000/api/upload/', {element1: selectedFile, elment2: selectedFile.name})
        .then(result => {
            console.log('retorno api', result)
        })
    }
    
    return(
        <>
        <SideMenuNavBar/>
        <StyledFullContainer>
        <StyledContainerAvatar>
            <img src="https://meujornalzinho.s3-sa-east-1.amazonaws.com/assets/notfound.png"/>
            <Upload/>
            <StyledButton onClick={submitFileUpload}>Alterar Logo</StyledButton>
        </StyledContainerAvatar>
        <StyledContainerConfigs>
        <p>INFORMAÇÕES DO RODAPÉ</p>
        <StyledButtonEdit>EDITAR</StyledButtonEdit>
        </StyledContainerConfigs>
    
        </StyledFullContainer>
        </>
    )
}

export default Configuration