import React from 'react'

import { LoaderMapLocation, MarkersHint, MapInput, Map } from './index'

export const Address = () => {
  return (
    <>
      <MarkersHint />
      <MapInput onSubmit={() => {}} />
      {isLoading && <LoaderMapLocation />}
      <Map markers={[]} center={{}} />
    </>
  )
}
