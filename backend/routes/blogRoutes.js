const express = require("express");
const {
  getAllBlogController,
  createBlogController,
  updateBlogController,
  getBlogByIdContriller,
  deleteBlogController,
  userBlogController,
} = require("../controllers/blogController");

// router object
const router = express.Router();

// router
// GET || ALL BLOGS
router.get("/all-blog", getAllBlogController);

// POST || create blog
router.post("/create-blog", createBlogController);

// PUT || update blog
router.put("/update-blog/:id", updateBlogController);

// GET ||single blog details
router.get("/get-blog/:id", getBlogByIdContriller);

// DELETE || delete blog
router.delete("/delete-blog/:id", deleteBlogController);

// GET || user blog
router.get("/user-blog/:id", userBlogController);

module.exports = router;
