const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const { protect, optionalAuth } = require('../middleware/auth');

// @route  GET /api/blogs
// @desc   Get all blogs — supports ?category=, ?search=, ?featured=, ?page=, ?limit=
// @access Public
router.get('/', optionalAuth, async (req, res) => {
  try {
    const { category, search, featured, page = 1, limit = 9 } = req.query;

    const filter = { published: true };

    if (category && category !== 'All') {
      filter.category = category;
    }

    if (featured === 'true') {
      filter.featured = true;
    }

    if (search && search.trim()) {
      filter.$or = [
        { title: { $regex: search.trim(), $options: 'i' } },
        { summary: { $regex: search.trim(), $options: 'i' } },
        { authorName: { $regex: search.trim(), $options: 'i' } },
      ];
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const total = await Blog.countDocuments(filter);

    const blogs = await Blog.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .populate('author', 'name avatar');

    res.status(200).json({
      success: true,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / parseInt(limit)),
      blogs,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route  GET /api/blogs/:id
// @desc   Get a single blog by ID (increments view count)
// @access Public
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    ).populate('author', 'name avatar bio');

    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found.' });
    }

    res.status(200).json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route  POST /api/blogs
// @desc   Create a new blog post
// @access Private
router.post('/', protect, async (req, res) => {
  try {
    const { title, summary, content, category, tags, featured, readTime, coverImage } = req.body;

    if (!title || !summary || !content) {
      return res.status(400).json({ success: false, message: 'Title, summary, and content are required.' });
    }

    const blog = await Blog.create({
      title,
      summary,
      content,
      category: category || 'Other',
      tags: tags || [],
      featured: featured || false,
      readTime: readTime || `${Math.ceil(content.split(' ').length / 200)} min read`,
      coverImage: coverImage || '',
      author: req.user._id,
      authorName: req.user.name,
    });

    res.status(201).json({ success: true, message: 'Blog published successfully.', blog });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages.join(', ') });
    }
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route  PUT /api/blogs/:id
// @desc   Update a blog post (only the author can update)
// @access Private
router.put('/:id', protect, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found.' });
    }

    if (blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized to update this blog.' });
    }

    const allowed = ['title', 'summary', 'content', 'category', 'tags', 'featured', 'readTime', 'coverImage', 'published'];
    const updates = {};
    allowed.forEach((field) => {
      if (req.body[field] !== undefined) updates[field] = req.body[field];
    });

    const updated = await Blog.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, message: 'Blog updated successfully.', blog: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route  DELETE /api/blogs/:id
// @desc   Delete a blog post (only the author can delete)
// @access Private
router.delete('/:id', protect, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found.' });
    }

    if (blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized to delete this blog.' });
    }

    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Blog deleted successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route  GET /api/blogs/user/:userId
// @desc   Get all blogs by a specific user
// @access Public
router.get('/user/:userId', async (req, res) => {
  try {
    const blogs = await Blog.find({ author: req.params.userId, published: true })
      .sort({ createdAt: -1 })
      .populate('author', 'name avatar');

    res.status(200).json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
