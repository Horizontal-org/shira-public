import { FunctionComponent } from 'react'
import styled from 'styled-components'
import Logo  from '../Icons/Logo'
import { useNavigate } from 'react-router-dom'

interface Props {
  color?: string
}
export const Navbar: FunctionComponent<Props> = ({ color }) => {
  let navigate = useNavigate()

  return (
    <NavbarWrapper color={color}>
      <Logo />
      
      <Nav>
        <Link onClick={() => { navigate('/') }}>
          Home
        </Link>
        {/* <Link onClick={() => { navigate('/resources') }}>
          Resources
        </Link> */}
        <Link onClick={() => { navigate('/about') }}>
          About
        </Link>
      </Nav>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.div<{color?: string}>`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing.md};
  position: relative;
  background: ${props => props.color ? props.color : 'transparent'};
`

const Nav = styled.nav`
  padding-left: 5px;
`

const Link = styled.span`
  font-weight: 700;
  margin-left: ${props => props.theme.spacing.md};
  color: ${props => props.theme.primary.dark};
  cursor: pointer;
`