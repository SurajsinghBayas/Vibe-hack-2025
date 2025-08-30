import React from 'react'
import { Card, CardContent, Typography, Stack, Avatar, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function TrendingList({ articles }) {
  return (
    <Card sx={{ height: '100%', borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>Trending</Typography>
        <Stack spacing={2}>
          {articles.map((a, idx) => (
            <Stack key={a.id} direction="row" spacing={2} alignItems="center">
              <Box sx={{ fontWeight: 700, color: 'text.secondary', width: 24 }}>{idx + 1}</Box>
              <Avatar src={a.avatar} />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography component={Link} to={`/article/${a.slug}`} sx={{ textDecoration: 'none', color: 'inherit', display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {a.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">{a.author}</Typography>
              </Box>
              <Button size="small" component={Link} to={`/article/${a.slug}`}>Read</Button>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  )
}
