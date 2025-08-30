const jwt = require('jsonwebtoken')
const User = require('../models/User')

const auth = async (req, res, next) => {
  const header = req.headers.authorization
  if (!header) return res.status(401).json({ message: 'Missing auth token' })
  const token = header.replace('Bearer ', '')
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'dev-secret')
    const user = await User.findById(payload.id)
    if (!user) return res.status(401).json({ message: 'Invalid token' })
    req.user = user
    next()
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}

const requireAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') return res.status(403).json({ message: 'Admin required' })
  next()
}

module.exports = { auth, requireAdmin }
