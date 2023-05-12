import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import { checked, unchecked } from './images'

export const TrackingHistory = ({ removeHistory, history, activeId, handle }) => {
  const handleClick = (id, num) => () => handle(id, num)

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={{ xs: 'flex-end', md: 'flex-start' }}
      width={{ xs: '100%', md: '40%' }}
    >
      <Stack p={1} direction="row" alignItems="end" justifyContent="flex-end">
        <Button
          onClick={() => {
            removeHistory()
            localStorage.clear()
          }}
          sx={{ borderRadius: '50px', px: 2 }}
          color="inherit"
        >
          <Typography variant="caption" textTransform="lowercase" fontWeight={600} mr={1}>
            Історія
          </Typography>
          <DeleteForeverIcon color="primary" />
        </Button>
      </Stack>
      <Box
        sx={{
          py: 1,
          overflow: 'auto',
          maxHeight: { md: '100%', xs: '200px' },
        }}
      >
        {history &&
          history
            .map((el) => (
              <Stack
                key={el.id}
                direction="row"
                alignItems="center"
                onClick={handleClick(el.id, el.value)}
                gap={2}
                sx={{
                  p: 2,
                  cursor: 'pointer',
                  borderRadius: '12px',
                  backgroundColor: activeId === el.id && '#DDECFD',
                }}
              >
                <Box width={32} height={32} display={{ xs: 'none', md: 'flex' }}>
                  {activeId === el.id ? (
                    <img src={checked} alt="checked" />
                  ) : (
                    <img src={unchecked} alt="unchecked" />
                  )}
                </Box>
                <Typography fontWeight={800} color={activeId === el.id ? '#348DF6' : '#686868'}>
                  {el.value}
                </Typography>
              </Stack>
            ))
            .reverse()}
      </Box>
    </Box>
  )
}
