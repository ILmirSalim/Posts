import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Post = styled.div`
 display: flex:
 flex-direction: column;
 gap: 15px;
 justify-content: space-between;
`

export const Image = styled.img`
    max-width: 280px;
`

export const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
`

export const DatailLink = styled(Link)`
    color: black;
    text-decoration: none;

    &:hover {
        color: blue;
        text-decoration: underline;
    }
`
