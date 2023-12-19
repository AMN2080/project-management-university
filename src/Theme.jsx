import createTheme from '@mui/material/styles/createTheme';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { useCookies } from 'react-cookie';
import App from './App.jsx'
import {useMemo} from "react"

function Theme(){
  const [dark] = useCookies(['darkMode']);
  const prefersDarkMode = dark.darkMode
  
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
      ...(prefersDarkMode
        ? {
            primary: {
              main: '#151c47',
            }
          }
          : {
            primary: {
              main: "#4558d1"
            }
          }),
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