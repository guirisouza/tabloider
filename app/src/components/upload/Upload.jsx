import React, {Component} from "react";
import Dropzone from 'react-dropzone';
import {StyledDropContainer, StyledUploadMessage} from './style'

const Upload = () => {
    const renderDragMessage = (isDragActive, isDragReject) => {
        if (!isDragActive) {
            return (<StyledUploadMessage>Arraste arquivos aqui...</StyledUploadMessage>)
        }
        if (isDragReject) {
            return (<StyledUploadMessage type="error">Arquivo não suportado...</StyledUploadMessage>)
        }
        return (<StyledUploadMessage type="success">Solte o arquivo...</StyledUploadMessage>)
    }

    return(
        <Dropzone accept="image/*" onDropAccepted={() => {}}>
        {({getRootProps, getInputProps, isDragActive, isDragReject})=>(
            <StyledDropContainer
                {...getRootProps()}
                isDragActive={isDragActive}
                isDragReject={isDragReject}
                >
            <input {...getInputProps()}/>
            {renderDragMessage(isDragActive, isDragReject)}
            </StyledDropContainer>
        )}
    </Dropzone>
    )
}

export default Upload