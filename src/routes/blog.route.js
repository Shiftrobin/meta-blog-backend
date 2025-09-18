const express = require("express");
const Blog = require("../models/blog.model");
const router = express.Router();
const { getAllBlogs, postANewBlog, getBlogById, deleteBlogById, updateBlogById } = require("../controllers/blog.controller");


//get all posts http://localhost:3000/blog/posts
router.get('/posts', getAllBlogs)

//post a new blog post http://localhost:3000/blog/add-post
router.post('/add-post', postANewBlog)

//get a single blog by id http://localhost:3000/blog/:id
router.get('/:id', getBlogById)

//Delete a blog post by id http://localhost:3000/blog/delete/:id
router.delete('/delete/:id', deleteBlogById)


// Update a blog by id http://localhost:3000/blog/update/:id
router.patch('/update/:id', updateBlogById)




module.exports = router;

