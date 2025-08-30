import React from 'react'
import { Grid, Box, Typography, Chip, Card, CardContent, CardMedia, Stack, Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard'
import TrendingList from '../components/TrendingList'

const mockArticles = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Modern MERN Patterns ${i + 1}`,
  slug: `modern-mern-patterns-${i + 1}`,
  excerpt: 'Build secure, scalable apps with JWT, RBAC, and clean architecture.',
  cover: `https://picsum.photos/seed/mern-${i}/800/450`,
  author: 'Alex Dev',
  avatar: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`,
  tags: ['MERN', 'Best Practices', 'Security'],
  date: '2h ago',
}))

export default function HomePage() {
  return (
    <Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' }, gap: 3, mb: 4 }}>
        <HeroCard article={mockArticles[0]} />
  <TrendingList articles={mockArticles.slice(1, 5)} />
      </Box>

      <Typography variant="h6" sx={{ mb: 2 }}>Latest</Typography>
      <Grid container spacing={3}>
        {mockArticles.map((a) => (
          <Grid item xs={12} sm={6} md={4} key={a.id}>
            <ArticleCard article={a} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

function HeroCard({ article }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3, overflow: 'hidden' }}>
      <CardMedia component={Link} to={`/article/${article.slug}`} image={article.cover} sx={{ height: 280 }} />
      <CardContent>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          {article.tags.map((t) => <Chip key={t} size="small" label={t} />)}
        </Stack>
        <Typography variant="h5" component={Link} to={`/article/${article.slug}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{article.excerpt}</Typography>
        <Stack direction="row" spacing={1.5} sx={{ mt: 2 }} alignItems="center">
          <Avatar src={article.avatar} />
          <Typography variant="body2" color="text.secondary">{article.author} • {article.date}</Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}

// components extracted: TrendingList, ArticleCard
