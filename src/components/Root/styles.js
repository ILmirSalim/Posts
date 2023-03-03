import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Menu = styled.div`
    dislay: flex;
    gap: 15px;
    align-items: center;
    justify-content: space-between;
    margin-left: 80px;
`

export const MenuItem = styled(NavLink)`
font-size: 16px;
margin-left: 70px;
margin-right: 30px;
text-decoration: none;
color: black;
&.active {
    color: blue;
}
&:hover {
    text-decoration: underline;
}
`