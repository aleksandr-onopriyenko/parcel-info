import React from 'react'
import { Box } from '@mui/material'

import './loaderMapLocation.css'

export const LoaderMapLocation = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        background: '#333333aa',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        zIndex: 1000,
        justifyContent: 'center',
      }}
    >
      <div className="pin"></div>
      <div className="pulse"></div>
    </Box>
  )
}
