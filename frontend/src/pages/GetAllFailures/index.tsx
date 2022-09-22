import { useQuery } from 'react-query'
import axios from 'axios'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

const GetAllFailures: React.FC = () => {
  const { data } = useQuery(['failures'], ({ signal }) => {
    return axios.get('http://localhost:5000/failures', { signal })
  })

  return (
    <>
      {data?.data.failures.map((item: any) => (
        <>
          <img
            key={item?._id}
            alt={item?._id}
            src={`http://localhost:5000/${item?.image}`}
          />
          <MapContainer center={item.location.coordinates} zoom={12}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            <Marker position={item.location.coordinates} />
          </MapContainer>
        </>
      ))}
    </>
  )
}

export default GetAllFailures
