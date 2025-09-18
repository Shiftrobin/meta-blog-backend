const Blog = require("../models/blog.model")

//get all posts 
const getAllBlogs = async(req, res) => {
    try{
      const blogs = await Blog.find().sort({createdAt: -1})
      res.status(200).send({message:"Blogs fetched successfully", blogs})
  
    }catch(error){
    console.log('Error fetching all blog posts', error)      
          res.status(500).send({message:'Error fetching all blog posts', error})  
    }
  }

//get a single blog post by id 
const getBlogById = async(req, res) => {
    try{
        const {id} = req.params
        const blog = await Blog.findById(id)
        if(!blog){
            return res.status(404).send({message: "No post found with this id"})
        }
        //console.log(blog)
        res.status(200).send({message:"Blog fetched successfully", blog})
    }catch(error){
        console.log('Error fetching blog post by id', error)      
        res.status(500).send({message:'Error fetching blog post by id', error})  
    }
}

//post a new blog post
const postANewBlog = async(req, res) => {   
    try{
        const newBlog = new Blog({...req.body})   
        const blog = await newBlog.save()
        res.status(200).send({message:"Blog added successfully", blog})
    } catch(error){
        console.log('Error while adding new blog post', error)      
        res.status(500).send({message:'Error while adding new blog post', error})  
    }      
}

//Delete a blog post by id
const deleteBlogById = async(req, res) => {
    try{
        const {id} = req.params
        const deletedBlog = await Blog.findByIdAndDelete(id)
        if(!deletedBlog){
            return res.status(404).send({message: "No post found with this id"})
        }
        res.status(200).send({message:"Blog deleted successfully", deletedBlog})

    }catch(error){
        console.log('Error deleting blog post by id', error)      
        res.status(500).send({message:'Error deleting blog post by id', error})  
    }
}

//Update a blog post by id
const updateBlogById = async(req, res) => {
    try{
       const {id} = req.params
       const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {new: true})
       if(!updatedBlog){
           return res.status(404).send({message: "No post found with this id"})
       }
        res.status(200).send({message:"Blog updated successfully", updatedBlog})
    }catch(error){
        console.log('Error updating blog post by id', error)      
        res.status(500).send({message:'Error updating blog post by id', error})  
    }
}

  module.exports = {
    getAllBlogs,
    getBlogById,
    postANewBlog,
    deleteBlogById,
    updateBlogById
  }