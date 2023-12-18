import createTheme from '@mui/material/styles/createTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import {useMemo} from "react"

function Theme(){
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');
  
  const getDesignTokens = (prefersDarkMode) => ({
    typography: {
      "fontFamily": `"Vazirmatn", "Roboto", sans-serif`,
      "fontSize": 14,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500
    },
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
    },
  });
  
  const theme = useMemo(() => createTheme(getDesignTokens(prefersDarkMode)), [prefersDarkMode])
  
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  )
}

//const theme = createTheme(getDesignTokens('light'))

export default Theme;