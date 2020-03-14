import React, {useState, useEffect} from 'react'
import SideMenuNavBar from '../side-menu-nav-bar/SideMenuNavBar';
import {StyledButton} from '../product-choice/style'
import axios from 'axios'

import {
    StyledFullContainer,
    StyledContainerAvatar,
    StyledButtonEdit,
    StyledContainerConfigs,
    StyledInputFileUpload
} from './style'
 

const Configuration = (props) => {
    const [selectedFile, setSelectedFile] = useState(null)

    const fileSelectedHandler = (event) => {
        console.log(event.target.files[0])
        setSelectedFile(event.target.files[0])
    }

    const submitFileUpload = () => {
        const fd = new FormData();
        fd.append('image', selectedFile.name,  selectedFile)
        axios.post('http://localhost:5000/api/upload/', fd)
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
            <StyledInputFileUpload onChange={fileSelectedHandler} type="file"></StyledInputFileUpload>
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