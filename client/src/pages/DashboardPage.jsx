import React from 'react'
import { Tabs, Tab, Box, Button, Card, CardContent, Typography, Stack } from '@mui/material'

function ArticleRow({ title, status }) {
  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardContent>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ sm: 'center' }} justifyContent="space-between">
          <Box>
            <Typography>{title}</Typography>
            <Typography variant="caption" color="text.secondary">{status}</Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            <Button size="small" variant="outlined">Edit</Button>
            <Button size="small" variant="contained">Submit</Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default function DashboardPage() {
  const [tab, setTab] = React.useState(0)
  const rows = Array.from({ length: 5 }).map((_, i) => ({ title: `My article ${i + 1}`, status: ['draft', 'pending', 'published'][i % 3] }))

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Typography variant="h5">My Articles</Typography>
        <Button variant="contained">New Article</Button>
      </Stack>
      <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 2 }}>
        <Tab label="Drafts" />
        <Tab label="Pending" />
        <Tab label="Published" />
      </Tabs>
      <Stack spacing={1.5}>
        {rows.map((r, i) => (
          <ArticleRow key={i} title={r.title} status={r.status} />
        ))}
      </Stack>
    </Box>
  )
}
