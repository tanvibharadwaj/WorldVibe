const express = require("express");
const router = express.Router();
const addBlog = require("../modal/postblog");
const User = require("../modal/user");

// Default test route
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// Create a new blog post
router.post("/add", async (req, res) => {
  try {
    const Newblog = new addBlog(req.body);
    await Newblog.save();
    res.status(200).json({ success: true, Newblog });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// View all blog posts
router.get("/view/all", async (req, res) => {
  try {
    const blogs = await addBlog.find();
    res.status(200).json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// View blog post by ID
router.get("/view/:id", async (req, res) => {
  try {
    const blog = await addBlog.findById(req.params.id);
    res.status(200).json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update post by id
router.put("/updateById/:id", async (req, res) => {
  try {
    const updateById = await addBlog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).send({ updateById, message: "Updated successfully" });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Delete post by id
router.delete("/delete/:id", async (req, res) => {
  try {
    const user = await addBlog.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Register by email
router.post("/register", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const user = new User(req.body);
    await user.save();

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const fetchuserData = await User.findOne({ email });

    if (!fetchuserData) {
      return res.status(400).json({ message: "Email does not exist" });
    }

    if (fetchuserData.password !== password) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    return res.status(200).json({
      message: "Login successfully",
      user: fetchuserData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message, success: false });
  }
});

module.exports = router;
