
import styled from 'styled-components'

export const Image = styled.img`
    max-width: 300px;
    align-items: center;
    margin-left: 360px;
`

export const Text = styled.div`
    font-size: 34px;
    text-align: center;
`

export const LinkWrapper = styled.div`
    text-align: center;
    margin: 15 0 0 0;
    display: flex;
    justify-content: center;
    gap: 15px;
    padding-top: 15px;
    align-items: center;
`
export const DeleteButton = styled.button`
    border: 1px solid;
    background: white;
    padding: 5px 10px;
    color: black;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background: red;
        color: white;
        border: 1px solid black;
    }
`

export const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.5);
    z-index: 1;
`

export const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: black;
    border: 1px solid black;
    padding: 10px 20px;
    background: white;
    border-radius: 25px;
`

export const Modaltext = styled.div`
    color: black;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`

export const ModalContent = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 10px;
`