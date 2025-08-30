import React from 'react'
import { Box, Stack, Avatar, TextField, Button, Typography, Card, CardContent } from '@mui/material'

export default function CommentList() {
  const [comments, setComments] = React.useState([
    { id: 1, author: 'Jamie', avatar: 'https://i.pravatar.cc/150?img=12', text: 'Love this breakdown!' },
    { id: 2, author: 'Taylor', avatar: 'https://i.pravatar.cc/150?img=24', text: 'Can you cover refresh tokens in depth?' },
  ])
  const [text, setText] = React.useState('')
  const add = () => {
    if (!text.trim()) return
    setComments((c) => [{ id: Date.now(), author: 'You', avatar: 'https://i.pravatar.cc/150?img=1', text }, ...c])
    setText('')
  }
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 1 }}>Comments</Typography>
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <Avatar src="https://i.pravatar.cc/150?img=1" />
        <TextField value={text} onChange={(e) => setText(e.target.value)} placeholder="Write a comment..." fullWidth size="small" />
        <Button variant="contained" onClick={add}>Post</Button>
      </Stack>
      <Stack spacing={1.5}>
        {comments.map((c) => (
          <Card key={c.id} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Stack direction="row" spacing={1.5}>
                <Avatar src={c.avatar} />
                <Box>
                  <Typography fontWeight={600}>{c.author}</Typography>
                  <Typography variant="body2" color="text.secondary">{c.text}</Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}
