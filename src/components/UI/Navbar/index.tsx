import { FunctionComponent } from 'react'
import styled from 'styled-components'
import Logo  from '../Icons/Logo'
import { useNavigate } from 'react-router-dom'

export const Navbar: FunctionComponent = () => {
  let navigate = useNavigate()

  return (
    <NavbarWrapper>
      <Logo />
      
      <Nav>
        <Link onClick={() => { navigate('/') }}>
          Home
        </Link>
        <Link onClick={() => { navigate('/resources') }}>
          Resources
        </Link>
        <Link onClick={() => { navigate('/about') }}>
          About
        </Link>
      </Nav>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing.md};
`

const Nav = styled.nav`
  padding-left: 20px;
`

const Link = styled.span`
  font-weight: 700;
  margin-left: ${props => props.theme.spacing.md};
  color: ${props => props.theme.primary.dark};
  cursor: pointer;
`