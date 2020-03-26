import styled, {css} from 'styled-components'

const dragActive = css`
    border-color: #78e5d5;
`

const dragReject = css`
    border-color: #e57878;
`

const StyledDropContainer = styled.div.attrs({
    className: "dropzone"
})`
    border: 1.5px dashed #ddd;
    border-radius: 4px;
    cursor: pointer;

    trasition: height 0.2 ease;

    ${props => props.isDragActive && dragActive};
    ${props => props.isDragReject && dragReject};
`
const messageColors = {
    default: "#999",
    error: "#e57878",
    success: "#78e5d5"
}

const StyledUploadMessage = styled.div`
    display: flex;
    color: ${props => messageColors[props.type || 'default']};
    justify-content: center;
    align-items: center;
    padding: 15px;
`


export {
    StyledDropContainer,
    StyledUploadMessage
}