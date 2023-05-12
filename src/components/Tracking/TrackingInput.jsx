import React from 'react'
import { Box, TextField, Button } from '@mui/material'

import { useWindowSize } from '@/hooks/useWindowSize'

export const TrackingInput = ({ onSubmit, value, disabled, onChange }) => {
  const { width } = useWindowSize()

  return (
    <Box mb={2} gap={1} display="flex" component="form" onSubmit={onSubmit}>
      <TextField
        fullWidth
        name="number"
        id="number"
        value={value}
        label="Номер посилки"
        size={width < 900 ? 'small' : 'height'}
        onChange={onChange}
      />
      <Button sx={{ flexShrink: 0 }} type="submit" variant="contained" disabled={disabled}>
        Відстежити
      </Button>
    </Box>
  )
}
