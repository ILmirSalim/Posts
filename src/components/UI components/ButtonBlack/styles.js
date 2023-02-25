import styled from 'styled-components'

export const ButtonBlack = styled.button`
    border: none;
    background: black;
    color: white;
    border-radius: 15px;
    padding: 10px 0;
    cursor: pointer;

    &:hover {
        background: grey;
    }

    &:disabled {
        background: grey;
        cursor: default;
    }
`