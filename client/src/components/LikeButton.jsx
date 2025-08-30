import React from 'react'
import { IconButton, Tooltip, Badge } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

export default function LikeButton({ initial = 12 }) {
  const [liked, setLiked] = React.useState(false)
  const [count, setCount] = React.useState(initial)
  const toggle = () => {
    setLiked((v) => !v)
    setCount((c) => c + (liked ? -1 : 1))
  }
  return (
    <Tooltip title={liked ? 'Unlike' : 'Like'}>
      <IconButton color={liked ? 'error' : 'default'} onClick={toggle}>
        <Badge badgeContent={count} color="error">
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Badge>
      </IconButton>
    </Tooltip>
  )
}
