import React from 'react'
import { Box, TextField } from '@mui/material'
import { usePlacesWidget } from 'react-google-autocomplete'

export const MapInput = ({ onSubmit }) => {
  const { ref } = usePlacesWidget({
    apiKey: import.meta.env.VITE_MAPS_API,
    options: {
      types: ['address'],
      componentRestrictions: { country: 'ua' },
    },
    libraries: ['places'],
    onPlaceSelected: onSubmit,
  })

  return (
    <Box mb={1}>
      <TextField
        inputRef={ref}
        placeholder="Введіть адресу"
        sx={{
          width: '100%',
          input: { py: { xs: '0.52rem', md: '0.85rem' } },
        }}
      />
    </Box>
  )
}
