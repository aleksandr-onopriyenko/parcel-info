import React from 'react'
import { Box, Typography } from '@mui/material'

export const EmptyData = ({ image, description }) => {
  return (
    <Box
      gap={2}
      flexGrow={1}
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Box width={112}>
        <img src={image} alt="empty data" />
      </Box>
      <Typography variant="h4" textAlign="center">
        {description}
      </Typography>
    </Box>
  )
}
