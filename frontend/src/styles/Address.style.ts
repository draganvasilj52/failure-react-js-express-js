import styled from 'styled-components'

export const RelativeAddressWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const AbsoluteAddressWrapper = styled.div`
  width: 450px;
  background-color: #2cb1bc;
  z-index: 10;
  position: absolute;
  top: 63px;

  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 15px;
  justify-content: center;
  display: ${({ typedAddress }: { typedAddress: string }) =>
    typedAddress === '' ? 'none' : 'flex'};
`
export const Address = styled.p`
  padding: 0;
  margin: 0;
  color: white;
  text-align: center;
  font-size: 1rem;
  padding-bottom: 12px;
  &:last-child {
    padding-bottom: 0;
  }
  &:hover {
    cursor: pointer;
  }
`
