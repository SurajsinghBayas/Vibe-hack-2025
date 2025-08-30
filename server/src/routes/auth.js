const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body
  if (!email || !password) return res.status(400).json({ message: 'Missing fields' })
  try {
    const existing = await User.findOne({ email })
    if (existing) return res.status(400).json({ message: 'Email exists' })
    const passwordHash = await bcrypt.hash(password, 10)
    const user = await User.create({ name, email, passwordHash })
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'dev-secret')
    res.json({ user: { id: user._id, name: user.name, email: user.email }, token })
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) return res.status(400).json({ message: 'Invalid' })
  const ok = await bcrypt.compare(password, user.passwordHash)
  if (!ok) return res.status(400).json({ message: 'Invalid' })
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'dev-secret')
  res.json({ user: { id: user._id, name: user.name, email: user.email }, token })
})

module.exports = router
