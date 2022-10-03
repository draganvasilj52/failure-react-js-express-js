import { map } from 'leaflet'
import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  justify-content: center;
  height: 700px;
  align-items: center;
`

export const Input = styled.input`
  width: 450px;
  border-radius: 30px;
  border: none;
  height: 30px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
  font-size: 1rem;
`

export const Button = styled.button`
  color: white;
  background-color: ${(props) => props.color};
  border-radius: 30px;
  width: ${({ width }: { width: string }) => width};
  height: 50px;
  border: 0;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 1.1rem;
`

export const Label = styled.label`
  margin-bottom: 5px;
`

export const TextArea = styled.textarea`
  padding: 10px;
  border: 0;
  resize: none;
  &:focus {
    outline: none;
  }
  width: 450px;
  height: 140px;
  border-radius: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
  line-height: 1.5;
`

export const ErrorWrapper = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ErrorText = styled.p`
  color: red;
  padding: 0;
`
