import { useQuery } from 'react-query'
import axios from 'axios'
import {
  FailureCard,
  FailureText,
  FailureWrapper,
} from './../../styles/Failure.style'
import type { Failure } from '../../types'
import MapRender from './../../components/MapRender'
const GetAllFailures: React.FC = () => {
  const { data } = useQuery(['failures'], ({ signal }) => {
    return axios.get('http://localhost:5000/failures', { signal })
  })

  return (
    <FailureWrapper>
      {data?.data.failures.map((item: Failure, index: React.Key) => (
        <FailureCard key={index}>
          <FailureText>
            User: {item.firstName} {item.lastName}
          </FailureText>
          <FailureText>Description: {item.failure}</FailureText>
          <img
            alt=""
            style={{ paddingBottom: '10px', width: '600px', height: '600px' }}
            src={`http://localhost:5000/${item.image}`}
          />
          <FailureText>Address: {item.address}</FailureText>
          <MapRender item={item} />
        </FailureCard>
      ))}
    </FailureWrapper>
  )
}

export default GetAllFailures
