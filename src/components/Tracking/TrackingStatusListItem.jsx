import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

export const TrackingStatusListItem = ({ bg, name, description, index, icon, isLast = false }) => {
  return (
    <Stack
      direction="row"
      gap={2}
      flex={1}
      height={{ xs: 'auto', md: '110px' }}
      sx={{
        backgroundColor: bg,
        borderBottom: isLast ? 'none' : '1px solid #333',
      }}
    >
      <Box
        display={{ xs: 'none', md: 'flex' }}
        flexBasis="20%"
        flexShrink={0}
        alignItems="center"
        justifyContent="center"
        boxShadow="5px 0 20px 0px #333"
        position="relative"
        sx={{
          clipPath: 'inset(0px -50px 0px 0px)',
          '&::before': {
            position: 'absolute',
            right: '-15px',
            content: '""',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '10px 0 10px 16.6px',
            lineHeight: '0px',
            borderColor: 'transparent transparent transparent ' + bg,
          },
        }}
      >
        <Typography
          color="#EAF4F4"
          variant="h2"
          fontFamily="'Montserrat', sans-serif"
          fontWeight={900}
          sx={{
            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black ',
          }}
        >
          {index}
        </Typography>
      </Box>
      <Stack
        direction={{ md: 'row' }}
        flex={1}
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <Box order={{ xs: 1, md: 0 }} textAlign={{ xs: 'center', md: 'left' }}>
          <Typography variant="body2" color="#fff" fontWeight={800}>
            {name}
          </Typography>
          <Typography lineHeight={1} variant="body2" color="#EAF4F4" fontSize="0.85rem">
            {description}
          </Typography>
        </Box>
        <Box
          display="flex"
          order={{ xs: 0, md: 1 }}
          flexShrink={0}
          sx={{
            width: '56px',
            height: '56px',
            m: 1,
            ml: 2,
            img: {
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            },
          }}
        >
          <img src={icon} alt="checked icon" />
        </Box>
      </Stack>
    </Stack>
  )
}
