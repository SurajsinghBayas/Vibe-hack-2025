import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Grid, Typography, Chip, Stack, Avatar, Card, CardContent, Divider, Box, Button } from '@mui/material'
import LikeButton from '../components/LikeButton'
import CommentList from '../components/CommentList'
import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'

const md = `# Build a MERN Blogging Platform

This article walks through auth, RBAC, and a clean approval workflow.\n\n## Key Steps\n- JWT access + refresh\n- Draft -> Pending -> Approved\n- Trending by engagement\n\n> Designed for scalability and great UX.`

export default function ArticlePage() {
  const { slug } = useParams()

  const article = {
    title: slug.replaceAll('-', ' '),
    author: 'Alex Dev',
    avatar: 'https://i.pravatar.cc/150?img=68',
    tags: ['MERN', 'Architecture'],
    date: 'Today',
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={8}>
        <Typography variant="h3" sx={{ mb: 1 }}>{article.title}</Typography>
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
          <Avatar src={article.avatar} />
          <Typography variant="body2" color="text.secondary">{article.author} • {article.date}</Typography>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
          {article.tags.map((t) => <Chip key={t} label={t} size="small" />)}
        </Stack>

        <Card sx={{ p: 3, borderRadius: 3 }}>
          <CardContent sx={{ '& h1, & h2, & h3': { mt: 2 }, '& p': { lineHeight: 1.8 } }}>
            <ReactMarkdown rehypePlugins={[rehypeSanitize]}>{md}</ReactMarkdown>
          </CardContent>
        </Card>

        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2 }}>
          <LikeButton />
          <Button variant="outlined" component={Link} to="/">Back to Home</Button>
        </Stack>

        <Divider sx={{ my: 3 }} />
        <CommentList />
      </Grid>

      <Grid item xs={12} md={4}>
        <Card sx={{ borderRadius: 3 }}>
          <CardContent>
            <Typography variant="subtitle1">About the author</Typography>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: 1.5 }}>
              <Avatar src={article.avatar} />
              <Box>
                <Typography>Alex Dev</Typography>
                <Typography variant="body2" color="text.secondary">Full-stack engineer</Typography>
              </Box>
            </Stack>
            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle2" color="text.secondary">Tags</Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap' }}>
              {article.tags.map((t) => <Chip key={t} label={t} size="small" />)}
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
