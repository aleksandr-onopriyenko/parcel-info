import React from 'react'
import { Box, Typography } from '@mui/material'

export const MarkerIcon = ({ color, $hover }) => (
  <Box
    sx={{
      width: 20,
      height: 20,
      background: $hover ? `${color}aa` : color,
      borderRadius: '50%',
      border: '2px solid #fff',
      cursor: $hover ? 'pointer' : 'auto',
      transition: 'transform 0.3s, background 0.3s',
      transform: $hover ? 'scale(1.5)' : 'none',
    }}
  />
)

export const Marker = ({ $hover, color, title }) => (
  <>
    <MarkerIcon color={color} $hover={$hover} />
    <Box
      sx={{
        display: $hover ? 'block' : 'none',
        p: 1,
        background: '#fff',
        width: '300px',
        position: 'relative',
        zIndex: 1000,
        boxShadow: '0 0 1px #333333aa',
        transform: 'translate(-50%, 1rem)',
      }}
    >
      <Typography variant="caption">{title}</Typography>
    </Box>
  </>
)
