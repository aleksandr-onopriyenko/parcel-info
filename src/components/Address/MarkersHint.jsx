import React from 'react'
import { Paper, Stack, Typography, ThemeProvider, createTheme } from '@mui/material'

import { MarkerIcon } from './Marker'

const theme = createTheme({
  components: {
    MuiPaper: {
      defaultProps: {
        sx: {
          position: 'absolute',
          bottom: '2rem',
          left: '2rem',
          minWidth: '250px',
          p: 2,
          zIndex: 10000000,
          opacity: 0.9,
        },
      },
    },
    MuiStack: {
      defaultProps: {
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    },
    MuiTypography: {
      defaultProps: {
        color: '#686868',
      },
    },
  },
})

export const MarkersHint = () => {
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Stack>
          <Typography>Відділення</Typography>
          <MarkerIcon color="#E63946" />
        </Stack>
        <Stack>
          <Typography>Вантажне відділення</Typography>
          <MarkerIcon color="#2A9D8F" />
        </Stack>
        <Stack>
          <Typography>Поштомат</Typography>
          <MarkerIcon color="#EFBF16" />
        </Stack>
      </Paper>
    </ThemeProvider>
  )
}
