import React, { useState } from 'react'
import { Box, Paper, AppBar, Tabs, Tab, ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#E63946',
    },
    secondary: {
      main: '#A8DADC',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          label: {
            color: '#333333aa',
            '&.Mui-focused': {
              color: 'inherit',
            },
          },
          '&.MuiFormControl-root input:is(:active, :focus, :hover) + fieldset': {
            borderColor: '#A8DADC',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          letterSpacing: '1.2px',
          fontWeight: 400,
          fontSize: '1rem',
          fontFamily: "'Montserrat', serif",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiSkeleton: {
      defaultProps: {
        variant: 'rectangular',
        sx: {
          width: '100%',
          height: { xs: '151px', md: '110px' },
          borderBottom: '1px solid #eee',
        },
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        sx: {
          position: 'absolute',
          bottom: { xs: '-1rem', md: '-1.5rem' },
          fontSize: { xs: '10px', md: '0.85rem' },
        },
      },
    },
  },
})

const Layout = ({ children }) => {
  const [tabValue, setTabValue] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <Box
        flex={1}
        display="flex"
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        height={{ xs: 'auto', md: '100vh' }}
      >
        <Paper
          sx={{
            p: { xs: 2, md: 4 },
            pt: { md: '75px', xs: '60px' },
            position: 'relative',
            height: { xs: '100%', md: '80%' },
            width: { md: '80%', xs: '100%' },
            boxShadow: { xs: 'none', md: '0 0 5px 0 #3333336b' },
          }}
        >
          <AppBar position="absolute">
            <Tabs
              onChange={(e, newValue) => setTabValue(() => newValue)}
              value={tabValue}
              indicatorColor="secondary"
              textColor="inherit"
            >
              <Tab label="Відстежити" value={0} />
              <Tab label="Адреси" value={1} />
            </Tabs>
          </AppBar>
          <Box height="100%">{children[tabValue]}</Box>
        </Paper>
      </Box>
    </ThemeProvider>
  )
}

export default Layout
