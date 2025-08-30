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
      <header className="bg-white/80 backdrop-blur sticky top-0 z-30 border-b border-slate-200">
        <div className="container-lg px-4 py-3 flex items-center gap-4">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-700 no-underline">
            <MenuBookIcon className="text-2xl" />
            <span className="font-semibold text-lg">Vibe Blog</span>
          </Link>

          <div className="flex-1">
            <div className="hidden sm:block">
              <TextField size="small" placeholder="Search articles..." InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon color="action" /></InputAdornment>) }} fullWidth />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button component={Link} to="/dashboard" variant="outlined">Dashboard</Button>
            <Button variant="contained">Sign In</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container-lg px-4 py-8">
        <Container maxWidth="lg" sx={{ p: 0 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article/:slug" element={<ArticlePage />} />
            <Route path="/dashboard/*" element={<DashboardPage />} />
          </Routes>
        </Container>
      </main>

      <Divider />
      <footer className="container-lg px-4 py-6">
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Vibe Blog. All rights reserved.
        </Typography>
      </footer>
    </Box>
  )
}

export default App
