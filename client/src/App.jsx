// Main App component
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Container, Box, IconButton, Button, Stack, Divider, TextField, InputAdornment } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import SearchIcon from '@mui/icons-material/Search'

import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import DashboardPage from './pages/DashboardPage'

function App() {
  return (
    <Box sx={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Toolbar sx={{ gap: 2 }}>
          <IconButton edge="start" color="primary" component={Link} to="/">
            <MenuBookIcon />
          </IconButton>
          <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
            Vibe Blog
          </Typography>
          <TextField size="small" placeholder="Search articles..." InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon color="action" /></InputAdornment>) }} sx={{ minWidth: 280, display: { xs: 'none', sm: 'inline-flex' } }} />
          <Stack direction="row" spacing={1}>
            <Button component={Link} to="/dashboard" variant="outlined">Dashboard</Button>
            <Button variant="contained">Sign In</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
          <Route path="/dashboard/*" element={<DashboardPage />} />
        </Routes>
      </Container>

      <Divider />
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Vibe Blog. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default App
