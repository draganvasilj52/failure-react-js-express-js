import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FormWrapper = styled.div`
  display: flex;
  max-width: 400px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 5px solid #2cb1bc;
  background-color: white;
  border-radius: 5px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  transition: 0.3s ease-in-out box-shadow;
`

export const Input = styled.input`
  width: 350px;
  border-radius: 30px;
  border: none;
  height: 30px;
  padding-left: 8px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
  font-size: 1rem;
  background-color: #f0f4f8;
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
  &:hover {
    background-color: #0e7c86;
  }
`

export const Label = styled.label`
  margin-bottom: 10px;
`

export const TextArea = styled.textarea`
  padding: 10px;
  border: 0;
  background-color: #f0f4f8;
  resize: none;
  padding-left: 8px;
  &:focus {
    outline: none;
  }
  width: 350px;
  height: 140px;
  border-radius: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
  line-height: 1.5;
`

export const ErrorWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ErrorText = styled.p`
  margin: 0;
  padding-bottom: 10px;
`
