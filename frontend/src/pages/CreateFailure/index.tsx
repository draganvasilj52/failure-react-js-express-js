import axios, { AxiosPromise, AxiosResponse, AxiosError } from 'axios'
import { useState, useRef } from 'react'
import { useMutation } from 'react-query'
import {
  ErrorText,
  ErrorWrapper,
  Input,
  InputWrapper,
  Label,
  TextArea,
} from '../../styles/Input.style'
import { Button } from './../../styles/Input.style'
import { Err } from '../../types'

const CreateFailure: React.FC = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [failure, setFailure] = useState('')
  const [file, setFile] = useState<any>()

  const [success, setSuccess] = useState('')

  const addFailure = (data: FormData): AxiosPromise<FormData> => {
    return axios({
      method: 'post',
      url: 'http://localhost:5000/failures/create',
      data: data,
    })
  }

  const mutation = useMutation<
    AxiosResponse<FormData>,
    AxiosError<Err>,
    FormData
  >({
    mutationFn: addFailure,
    onSuccess: () => {
      setSuccess('Failure Successfully Created')
    },
  })

  const filePickerRef: React.MutableRefObject<any> = useRef()

  const pickImageHandler = () => {
    filePickerRef.current.click()
  }

  const handleImage: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e?.target.files) {
      setFile(e.target.files[0])
      mutation.reset()
      setSuccess('')
    } else {
      setFile('')
    }
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('address', address)
    formData.append('failure', failure)
    formData.append('image', file)

    mutation.mutate(formData)

    setFirstName('')
    setLastName('')
    setFailure('')
    setAddress('')
    setFile('')
    setFirstName('')
  }

  const handleFirstName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value !== '') {
      mutation.reset()
      setSuccess('')
    }
    setFirstName(e.target.value)
  }

  const handleLastName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value !== '') {
      mutation.reset()
      setSuccess('')
    }
    setLastName(e.target.value)
  }
  const handleAddress: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value !== '') {
      mutation.reset()
      setSuccess('')
    }
    setAddress(e.target.value)
  }
  const handleFailure: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.target.value !== '') {
      mutation.reset()
      setSuccess('')
    }
    setFailure(e.target.value)
  }

  console.log(address)
  return (
    <InputWrapper>
      <h2>Submit Failure</h2>
      <Label>Enter FirstName</Label>
      <Input type="text" value={firstName} onChange={handleFirstName} />
      <Label>Enter LastName</Label>
      <Input type="text" value={lastName} onChange={handleLastName} />
      <Label>Enter Address</Label>

      <Input value={address} onChange={handleAddress} />

      <Label>Enter Failure Description</Label>
      <TextArea value={failure} onChange={handleFailure} />
      <input
        type="file"
        ref={filePickerRef}
        style={{ display: 'none' }}
        accept=".jpg,.png,.jpeg"
        onChange={handleImage}
      />
      <Button color="gray" width="120px" onClick={pickImageHandler}>
        Add Photo
      </Button>
      <Button color="blue" width="350px" onClick={handleClick}>
        Submit Failure
      </Button>
      <ErrorWrapper>
        {mutation.isError ? (
          <ErrorText>{mutation.error.response?.data.message}</ErrorText>
        ) : (
          <ErrorText>{success}</ErrorText>
        )}
      </ErrorWrapper>
    </InputWrapper>
  )
}

export default CreateFailure
