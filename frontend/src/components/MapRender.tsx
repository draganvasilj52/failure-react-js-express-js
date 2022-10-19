import Map, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import type { Failure } from '../types'

const MapRender: React.FC<{ item: Failure }> = ({ item }) => {
  return (
    <Map
      initialViewState={{
        latitude: item.coordinates[1],
        longitude: item.coordinates[0],
        zoom: 14,
      }}
      style={{
        maxWidth: 450,
        height: 400,
        marginTop: '10px',
        marginBottom: '20px',
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.REACT_APP_access_token}
    >
      <Marker
        longitude={item.coordinates[0]}
        latitude={item.coordinates[1]}
        color="red"
      />
    </Map>
  )
}

export default MapRender
