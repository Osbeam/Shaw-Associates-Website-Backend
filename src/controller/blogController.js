const Blog = require ('../models/blogModel')


// Get data via api/v1/Homes
exports.getBlog = async (req, res, next) => {
    const blog = await Blog.find();
    
    res.status(200).json({
        success : true,
        results : blog.length,
        data : blog
    })
}

//Post api for blog
exports.newBlog = async (req, res, next) => {
    const blog = await Blog.create(req.body); // createing body and storing data in blog

    res.status(200).json({
        success : true,
        message : 'blog created successfull.',
        data : blog
    })
}