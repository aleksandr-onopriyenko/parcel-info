import React from 'react'
import { Box } from '@mui/material'

export const TrackingWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        gap: {
          xs: 1,
          md: 3,
        },
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        justifyContent: { md: 'center', xs: 'flex-start' },
        height: 'calc(100% - 64px)',
      }}
    >
      {children}
    </Box>
  )
}
