import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarMainContainer = styled.nav`
  height: ${({ openBurger }: { openBurger: Boolean }) =>
    openBurger ? '100vh' : '80px'};

  background-color: ${({ theme }) => theme.colors.header};
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    height: 80px;
  }
  position: ${({ openBurger }: { openBurger: Boolean }) =>
    openBurger && 'fixed z-20'};
  right: ${({ openBurger }: { openBurger: Boolean }) => openBurger && '0px'};
  left: ${({ openBurger }: { openBurger: Boolean }) => openBurger && '0px'};
`

export const NavbarInnerContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 80px;
  align-items: center;
`

export const LeftHeader = styled.div`
  flex: 3;
  padding-left: 20px;
`

export const RightHeader = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  color: white;
  font-size: 1.5rem;
`

export const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 10px;
  font-size: 1.3rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`

export const NavbarExtendedLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding-bottom: 10px;
`

export const HamburgerIcon = styled.div`
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  width: 23px;
  height: auto;
  display: flex;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`

export const NavbarExtendedContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  font-size: 1.5rem;
  margin-top: 30px;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`

export const RightHeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
`
