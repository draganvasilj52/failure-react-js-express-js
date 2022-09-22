import {
  LeftHeader,
  NavbarLink,
  HamburgerIcon,
} from '../../../styles/Navbar.style'

const HeaderLeft = ({
  setOpenBurger,
  openBurger,
}: {
  setOpenBurger: React.Dispatch<React.SetStateAction<boolean>>
  openBurger: boolean
}) => {
  return (
    <LeftHeader>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/createfailure">Create Failure</NavbarLink>
      <NavbarLink to="/getfailures">Get All Failures</NavbarLink>
      <HamburgerIcon onClick={() => setOpenBurger((prev) => !prev)}>
        {openBurger ? <>&#10005;</> : <> &#9776;</>}
      </HamburgerIcon>
    </LeftHeader>
  )
}

export default HeaderLeft
