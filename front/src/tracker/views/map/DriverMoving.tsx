import Map, { Marker, Layer, Source } from 'react-map-gl/maplibre';

// ** React Imports
import { useState, useEffect } from 'react'

// import ActionsDialog from 'src/derc/views/ui/actions/ActionsDialog'
import { PositionType } from 'src/tracker/logic/models/Package';
import MyPin from 'src/pages/web/tracker/my-pin';

// const markerList: PointType[] = [
//   {
//     latitude: 6.1920023,
//     longitude: 1.1683853
//   },
//   {
//     latitude: 6.1919009706714405,
//     longitude: 1.1697317689298075
//   },
//   {
//     latitude: 6.19237028530911,
//     longitude: 1.1709924071695639
//   },
//   {
//     latitude: 6.193879555692703,
//     longitude: 1.1733956664386938
//   },
//   {
//     latitude: 6.194913668546846,
//     longitude: 1.1757300814750522
//   },
//   {
//     latitude: 6.196097613824875,
//     longitude: 1.17831036654934
//   },
//   {
//     latitude: 6.1965455924306525,
//     longitude: 1.1823819598393186
//   }
// ];

interface DriverMovingType {
  realTimeDriverPosition?: PositionType
  position1: PositionType
  position2: PositionType
  changeLocation: (position: PositionType) => void
  canChangeLocation: boolean
}

type Position = [number, number];

const DriverMoving = (props: DriverMovingType) => {
  const { position1, position2, changeLocation, canChangeLocation, realTimeDriverPosition } = props;

  console.log("position1 ::: ", position1)

  const [driverPosition, setDriverPosition] = useState<PositionType>({ lat: 0, lng: 0 });
  const [polygonCoordinates, setPolygonCoordinates] = useState<Position[]>([]);

  const handleGeolocation = (position: any) => {
    setDriverPosition({ lat: position.coords.latitude, lng: position.coords.longitude })
  }

  useEffect(() => {
    // launchCron();
    setPolygonCoordinates([
      [position1.lat, position1.lng],
      [position2.lat, position2.lng]
    ]);

    if (canChangeLocation) {
      const watchId = navigator.geolocation.watchPosition(handleGeolocation);

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    }
  }, [])

  useEffect(() => {
    console.log(" ############################ Actions ........ driverPosition ::: ", driverPosition)
    if (canChangeLocation) {
      changeLocation(driverPosition);
    }
  }, [driverPosition])

  useEffect(() => {
    if (realTimeDriverPosition !== null) {
      setDriverPosition({ lat: realTimeDriverPosition?.lat ?? 0, lng: realTimeDriverPosition?.lng ?? 0 })
    }
  }, [realTimeDriverPosition])



  // useEffect(() => {
  //   setDriverPosition({
  //     lat: markerList[index].latitude,
  //     lng: markerList[index].longitude
  //   });
  // }, [index])

  return (
    <>
      {polygonCoordinates.length !== 0 && driverPosition.lng !== 0 && (
        <>
          <Map
          initialViewState={{
            longitude: position1.lng,
            latitude: position1.lat,
            zoom: 17,
          }}

          style={{width: '100%', height: 400}}
          mapStyle="https://api.maptiler.com/maps/openstreetmap/style.json?key=v33A8KZrdd3uZqCfjngT"
        >
          <Marker key={1} longitude={driverPosition.lng} latitude={driverPosition.lat} anchor="bottom" >
            <img height={50} src="/map/pin.png" />
          </Marker>

          <Marker key={1} longitude={position1.lng} latitude={position1.lat} anchor="bottom" >
            <MyPin size={40} />
          </Marker>

          <Marker key={1} longitude={position2.lng} latitude={position2.lat} anchor="bottom" >
            <MyPin size={40} />
          </Marker>

          <Source id="polygon-source" type="geojson" data={{
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [polygonCoordinates],
            },
          }}>
          </Source>

          <Layer
            id="polygon-layer"
            type="fill"
            source="polygon-source"
            paint={{
              'fill-color': 'red',
              'fill-opacity': 0.5,
            }}
          />
        </Map>
        </>
      )}
    </>
  )
}

export default DriverMoving
