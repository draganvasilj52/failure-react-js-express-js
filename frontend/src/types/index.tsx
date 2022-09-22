export type Data = {
  firstName: string
  lastName: string
  address: string
  image: string
  failure: string
}

export type Err = {
  message: string
}

export type MyProps = {
  openBurger: boolean
  setOpenBurger: React.Dispatch<React.SetStateAction<boolean>>
}
