import Map, { Marker } from 'react-map-gl/maplibre';

import { PositionType } from 'src/tracker/logic/models/Package';

interface PickLocationType {
  value: PositionType
  onChange: (position: PositionType) => void
}

const PickLocation = (props: PickLocationType) => {
  const { onChange, value } = props;

  return (

    <Map
      onClick={(event) => {
        const clickedCoordinates = event.lngLat;

        onChange({ lat: clickedCoordinates.lat, lng: clickedCoordinates.lng })
      }}
      initialViewState={{
        longitude: 1.222186,
        latitude: 6.136629,
        zoom: 17,
      }}
      style={{width: "100%", height: 300}}
      mapStyle="https://api.maptiler.com/maps/openstreetmap/style.json?key=v33A8KZrdd3uZqCfjngT"
    >
      <Marker longitude={value.lng} latitude={value.lat} anchor="bottom" >
        <img height={50} src="/map/pin.png" />
      </Marker>
    </Map>
  )
}

export default PickLocation
