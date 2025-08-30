const express = require('express')
const router = express.Router()
const Article = require('../models/Article')
const { auth, requireAdmin } = require('../middleware/auth')

router.get('/', async (req, res) => {
  const q = req.query.q
  const filter = { status: 'published' }
  if (q) filter.title = new RegExp(q, 'i')
  const list = await Article.find(filter).populate('author', 'name').sort({ createdAt: -1 }).limit(50)
  res.json(list)
})

router.post('/', auth, async (req, res) => {
  const data = req.body
  const article = await Article.create({ ...data, author: req.user._id, status: 'pending' })
  res.json(article)
})

router.post('/:id/approve', auth, requireAdmin, async (req, res) => {
  const a = await Article.findById(req.params.id)
  if (!a) return res.status(404).json({ message: 'Not found' })
  a.status = 'published'
  await a.save()
  res.json(a)
})

router.post('/:id/like', auth, async (req, res) => {
  const a = await Article.findById(req.params.id)
  if (!a) return res.status(404).json({ message: 'Not found' })
  const idx = a.likes.findIndex((id) => id.equals(req.user._id))
  if (idx === -1) a.likes.push(req.user._id)
  else a.likes.splice(idx, 1)
  await a.save()
  res.json({ likes: a.likes.length })
})

module.exports = router
