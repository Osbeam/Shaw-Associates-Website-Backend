const mongoose = require('mongoose');

const HomePageClientSection = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  jobProfile: {
    type: String,
    required: true,
  },
  Rating: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
    maxlength: [180, "Descriptioin can not be exceed 180 characters"]
  },
  image: {
    type: String, // Store the file name or URL of the uploaded image
    required: true,
  },
});

module.exports = mongoose.model('ClientSection', HomePageClientSection);
