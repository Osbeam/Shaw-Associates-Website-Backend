const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    blogHead: {
        type: String,
        required: [true, 'Please enter job title'],
        trim: true,
        maxlength: [100, "job title can not be exceed 100 characters"]
    },
    contentDescription: {
        type: String,
        required: true,
        maxlength: [1000, 'job description can not be exceed 1000 characters']
    },
    blogContent: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model('blog', blogSchema);
