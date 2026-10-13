const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    summary: {
      type: String,
      required: [true, 'Summary is required'],
      maxlength: [500, 'Summary cannot exceed 500 characters'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    category: {
      type: String,
      enum: ['Technology', 'Lifestyle', 'Business', 'Health', 'Education', 'Finance', 'Travel', 'Other'],
      default: 'Other',
    },
    tags: {
      type: [String],
      default: [],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    readTime: {
      type: String,
      default: '5 min read',
    },
    coverImage: {
      type: String,
      default: '',
    },
    views: {
      type: Number,
      default: 0,
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// Text index for search
blogSchema.index({ title: 'text', summary: 'text', content: 'text' });

module.exports = mongoose.model('Blog', blogSchema);
