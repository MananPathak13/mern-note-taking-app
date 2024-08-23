const express = require('express');
const blogRouter = express.Router();

const { fetchListOfBlogs, updateABlog, addNewBlog, deleteABlog } = require('../controller/blog-controller');

// blogRouter.get("/", () => { console.log("in") });
blogRouter.get("/", fetchListOfBlogs);
blogRouter.post("/add", addNewBlog);
blogRouter.put("/update/:id", updateABlog);
blogRouter.delete("/delete/:id", deleteABlog);

module.exports = blogRouter;