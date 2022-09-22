import { RightHeader, RightHeaderLink } from '../../../styles/Navbar.style'

const HeaderRight = ({
  setOpenBurger,
}: {
  setOpenBurger: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <RightHeader>
      <RightHeaderLink onClick={() => setOpenBurger(false)} to="/">
        Failures
      </RightHeaderLink>
    </RightHeader>
  )
}

export default HeaderRight
