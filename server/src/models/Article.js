const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  excerpt: String,
  cover: String,
  tags: [String],
  status: { type: String, enum: ['draft', 'pending', 'published', 'hidden'], default: 'draft' },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  views: { type: Number, default: 0 },
  commentsCount: { type: Number, default: 0 },
}, { timestamps: true })

module.exports = mongoose.model('Article', ArticleSchema)
