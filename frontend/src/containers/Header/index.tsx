import {
  NavbarExtendedContainer,
  NavbarExtendedLink,
  NavbarInnerContainer,
  NavbarMainContainer,
} from '../../styles/Navbar.style'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
import { MyProps } from '../../types'

const Header: React.FC<MyProps> = (props: MyProps) => {
  return (
    <NavbarMainContainer openBurger={props.openBurger}>
      <NavbarInnerContainer>
        <HeaderLeft
          openBurger={props.openBurger}
          setOpenBurger={props.setOpenBurger}
        />
        <HeaderRight setOpenBurger={props.setOpenBurger} />
      </NavbarInnerContainer>
      {props.openBurger && (
        <NavbarExtendedContainer>
          <NavbarExtendedLink onClick={() => props.setOpenBurger(false)} to="/">
            Home
          </NavbarExtendedLink>
          <NavbarExtendedLink
            onClick={() => props.setOpenBurger(false)}
            to="/createfailure"
          >
            Create Failure
          </NavbarExtendedLink>
          <NavbarExtendedLink
            onClick={() => props.setOpenBurger(false)}
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
