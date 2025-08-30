import React from 'react'
import { Card, CardContent, CardMedia, Stack, Chip, Typography, Avatar } from '@mui/material'
import { Link } from 'react-router-dom'

export default function ArticleCard({ article }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3, overflow: 'hidden' }}>
      <CardMedia component={Link} to={`/article/${article.slug}`} image={article.cover} sx={{ height: 180 }} />
      <CardContent sx={{ flex: 1 }}>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          {article.tags.map((t) => <Chip key={t} size="small" label={t} />)}
        </Stack>
        <Typography variant="subtitle1" component={Link} to={`/article/${article.slug}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{article.excerpt}</Typography>
        <Stack direction="row" spacing={1.5} sx={{ mt: 2 }} alignItems="center">
          <Avatar src={article.avatar} />
          <Typography variant="caption" color="text.secondary">{article.author} • {article.date}</Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}
