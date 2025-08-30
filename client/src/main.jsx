import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import App from './App'
import './styles/global.css'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#5b21b6' },
    secondary: { main: '#06b6d4' }
  },
  shape: { borderRadius: 12 }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="min-h-screen bg-slate-50 text-slate-900">
          <App />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
