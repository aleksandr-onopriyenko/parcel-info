import { useEffect, useState } from 'react'
import { useGetAddressMutation } from '@/services/api/addressApi'
import { radiusMarkerLocation } from '@/utils/radiusMarkersLocation'

export const useAddressPlaces = () => {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 50.450001,
    lng: 30.523333,
  })
  const [markerLocations, setMarkerLocations] = useState([])
  const [fetchAddress, { isLoading, data: warehouses }] = useGetAddressMutation()

  const fetchRequest = (place) => {
    const lat = place.geometry.location.lat()
    const lng = place.geometry.location.lng()
    setCurrentLocation(() => ({ lat, lng }))
    fetchAddress(
      place.formatted_address
        .split(',')
        .filter((el) => isNaN(+el))[1]
        .trim()
    )
  }

  function checkLocation(maxDistance) {
    const filteredLocations = []
    for (const location of warehouses) {
      const distance = radiusMarkerLocation(
        currentLocation.lat,
        currentLocation.lng,
        location.lat,
        location.lng
      )

      if (distance <= maxDistance) {
        filteredLocations.push(location)
      }
    }

    setMarkerLocations(() => filteredLocations)
  }

  useEffect(() => {
    if (warehouses && warehouses.length) {
      checkLocation(1000)
    }
  }, [warehouses])

  return {
    fetchRequest,
    currentLocation,
    markerLocations,
    isLoading,
  }
}
