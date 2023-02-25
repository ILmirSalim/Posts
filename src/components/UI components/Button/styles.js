import styled from 'styled-components'

export const Button = styled.button`
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