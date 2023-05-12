import React from 'react'

import { LoaderMapLocation, MarkersHint, MapInput, Map } from './index'
import { useAddressPlaces } from '@/hooks/useAddressPlaces'

export const Address = () => {
  const { fetchRequest, currentLocation, markerLocations, isLoading } = useAddressPlaces()
  return (
    <>
      <MarkersHint />
      <MapInput onSubmit={fetchRequest} />
      {isLoading && <LoaderMapLocation />}
      <Map markers={markerLocations} center={currentLocation} />
    </>
  )
}
