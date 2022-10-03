import {
  Address,
  RelativeAddressWrapper,
  AbsoluteAddressWrapper,
} from '../styles/Address.style'
import React, { useState } from 'react'
import { Input, Label } from '../styles/Input.style'
import axios from 'axios'

const Addresses: React.FC<{
  setSuccess: React.Dispatch<React.SetStateAction<string>>
  setAddress: React.Dispatch<React.SetStateAction<string>>
  address: string
}> = ({ setAddress, address, setSuccess }) => {
  const [potentialAddresses, setPotentialAddresses] = useState<string[]>([])
  const [typedAddress, setTypedAddress] = useState('')

  const handleAddress: React.ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    if (e.target.value !== '') {
      setAddress('')
      setSuccess('')
    }

    setTypedAddress(e.target.value)

    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        e.target.value
      )}.json?access_token=${process.env.REACT_APP_access_token}`
    )

    const data = response.data

    setPotentialAddresses(data?.features.map((place: any) => place.place_name))
  }

  const handleClick = (item: string) => {
    setAddress(item)
    setTypedAddress('')
  }

  return (
    <RelativeAddressWrapper>
      <Label>Enter Address</Label>
      <Input
        type="text"
        value={address !== '' ? address : typedAddress}
        onChange={handleAddress}
      />

      {potentialAddresses.length > 0 && (
        <AbsoluteAddressWrapper typedAddress={typedAddress}>
          {potentialAddresses.map((item: string, index) => (
            <Address onClick={() => handleClick(item)} key={index}>
              {item}
            </Address>
          ))}
        </AbsoluteAddressWrapper>
      )}
    </RelativeAddressWrapper>
  )
}

export default Addresses
