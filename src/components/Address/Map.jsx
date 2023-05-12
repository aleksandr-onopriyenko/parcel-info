import React from 'react'
import GoogleMapReact from 'google-map-react'

import { Marker } from './Marker'

const TypeOfWarehouse = {
  '9a68df70-0267-42a8-bb5c-37f427e36ee4': '#2A9D8F', // Cargo
  '841339c7-591a-42e2-8233-7a0a00f0ed6f': '#E63946', // Default
  'f9316480-5f2d-425d-bc2c-ac7cd29decf0': '#EFBF16', // Poshtomat
  '6f8c7162-4b72-4b0a-88e5-906948c6a92f': '#eee', // ParcelShop
  '95dc212d-479c-4ffb-a8ab-8c1b9073d0bc': 'lightgreen', // PrivatPoshtomat
}

export const Map = ({ markers, center }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: import.meta.env.VITE_MAPS_API,
        libraries: ['places'],
      }}
      style={{
        width: '100%',
        height: 'calc(100% - 60px)',
        position: 'relative',
      }}
      hoverDistance={20}
      center={center}
      zoom={15}
      options={{ fullscreenControl: false }}
    >
      {markers &&
        markers.length &&
        markers.map(({ id, type, ...marker }) => {
          return <Marker key={id} color={TypeOfWarehouse[type]} {...marker} />
        })}
    </GoogleMapReact>
  )
}
