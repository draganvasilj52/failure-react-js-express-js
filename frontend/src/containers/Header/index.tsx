import {
  NavbarExtendedContainer,
  NavbarExtendedLink,
  NavbarInnerContainer,
  NavbarMainContainer,
} from '../../styles/Navbar.style'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
import { useState } from 'react'

const Header: React.FC = () => {
  const [openBurger, setOpenBurger] = useState<boolean>(false)
  return (
    <NavbarMainContainer openBurger={openBurger}>
      <NavbarInnerContainer>
        <HeaderLeft openBurger={openBurger} setOpenBurger={setOpenBurger} />
        <HeaderRight setOpenBurger={setOpenBurger} />
      </NavbarInnerContainer>
      {openBurger && (
        <NavbarExtendedContainer>
          <NavbarExtendedLink onClick={() => setOpenBurger(false)} to="/">
            Home
          </NavbarExtendedLink>
          <NavbarExtendedLink
            onClick={() => setOpenBurger(false)}
            to="/createfailure"
          >
            Create Failure
          </NavbarExtendedLink>
          <NavbarExtendedLink
            onClick={() => setOpenBurger(false)}
            to="/getfailures"
          >
            Get All Failures
          </NavbarExtendedLink>
        </NavbarExtendedContainer>
      )}
    </NavbarMainContainer>
  )
}

export default Header
