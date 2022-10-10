import axios, { AxiosPromise, AxiosResponse, AxiosError } from 'axios'
import { useState, useRef } from 'react'
import { useMutation } from 'react-query'
import {
  ErrorText,
  ErrorWrapper,
  Input,
  Wrapper,
  FormWrapper,
  Label,
  TextArea,
} from '../../styles/Form.style'
import { Button } from '../../styles/Form.style'
import { Err } from '../../types'
import Addresses from '../../components/Addresses'

const CreateFailure: React.FC = () => {
  const [initialValues, setInitialValues] = useState({
    firstName: '',
    lastName: '',
    failure: '',
  })
  const [address, setAddress] = useState('')
  const [file, setFile] = useState<File | string>('')
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
      setInitialValues((prev) => ({
        ...prev,
        firstName: '',
        lastName: '',
        failure: '',
      }))
      setAddress('')
      setFile('')
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
    formData.append('firstName', initialValues.firstName)
    formData.append('lastName', initialValues.lastName)
    formData.append('address', address)
    formData.append('failure', initialValues.failure)
    formData.append('image', file)

    mutation.mutate(formData)
  }

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    if (e.target.value !== '') {
      mutation.reset()
      setSuccess('')
    }
    setInitialValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Wrapper>
      <FormWrapper>
        <h2>Submit Failure</h2>
        <Label>Name</Label>
        <Input
          type="text"
          name="firstName"
          value={initialValues.firstName}
          onChange={handleChange}
        />
        <Label>LastName</Label>
        <Input
          type="text"
          name="lastName"
          value={initialValues.lastName}
          onChange={handleChange}
        />

        <Addresses
          setAddress={setAddress}
          address={address}
          setSuccess={setSuccess}
        />

        <Label>Description</Label>
        <TextArea
          name="failure"
          value={initialValues.failure}
          onChange={handleChange}
        />
        <input
          type="file"
          ref={filePickerRef}
          style={{ display: 'none' }}
          accept=".jpg,.png,.jpeg"
          onChange={handleImage}
        />
        <Button color="#2cb1bc" width="150px" onClick={pickImageHandler}>
          Add Photo
        </Button>
        <Button color="#2cb1bc" width="350px" onClick={handleClick}>
          Submit
        </Button>
        <ErrorWrapper>
          {mutation.isError ? (
            <ErrorText>{mutation.error.response?.data.message}</ErrorText>
          ) : (
            <ErrorText>{success}</ErrorText>
          )}
        </ErrorWrapper>
      </FormWrapper>
    </Wrapper>
  )
}

export default CreateFailure
