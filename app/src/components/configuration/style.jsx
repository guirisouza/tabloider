import styled from 'styled-components'

const StyledFullContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    p {
        margin-left: 20px;
    }

`
const StyledContainerAvatar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 400px;
    padding-right: 40px;
    border-right: 1px solid #E0E0E0;

    img {
        border-radius: 10px;
    }

`

const StyledContainerConfigs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 400px;

`

const StyledButtonEdit = styled.button`
    background: white;
    border: 2px solid #A9A9A9;
    border-radius: 3px;
    color: #A9A9A9;
    height: 48px;
    padding: 0 30px;
    margin-top: 10px;
    cursor: pointer;
`
const StyledInputFileUpload = styled.input`

`

export {
    StyledFullContainer,
    StyledContainerAvatar,
    StyledButtonEdit,
    StyledContainerConfigs,
    StyledInputFileUpload,
}

