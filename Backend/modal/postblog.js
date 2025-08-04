const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postBlog = new Schema({
  title: {
    type: String,
    required: true
  },
  content: String,
  author: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('addBlog', postBlog);
