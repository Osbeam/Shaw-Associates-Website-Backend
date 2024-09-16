const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    ServiceHead: {
        type: String,
        required: [true, 'Please enter job title'],
        trim: true,
        maxlength: [100, "job title can not be exceed 100 characters"]
    },
    serviceContent: {
        type: String,
        required: true,
        maxlength: [1000, 'job description can not be exceed 1000 characters']
    },

});

module.exports = mongoose.model('home', homeSchema);
