export const radiusMarkerLocation = (lat1, lon1, lat2, lon2) => {
  const R = 6371 // Radius of the earth in km
  const dLat = ((lat1 - lat2) * Math.PI) / 180 // deg2rad below
  const dLon = ((lon1 - lon2) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat2 * Math.PI) / 180) *
      Math.cos((lat1 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c // Distance in km
  return d * 1000 // Distance in meters
}
