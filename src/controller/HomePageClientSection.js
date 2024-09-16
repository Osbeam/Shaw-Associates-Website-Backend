const ClientSection = require('../models/HomePageClientSection');

// Create a new client testimonial
exports.newClient = async (req, res, next) => {
  try {
    const { Name, jobProfile, Rating, Description } = req.body;

    // Store the path to the uploaded image file
    const client = await ClientSection.create({
      Name,
      jobProfile,
      Rating,
      Description,
      image: req.file.path, // Add the image file path to the database
    });

    res.status(200).json({
      success: true,
      message: 'Client testimonial created successfully',
      data: client,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating client testimonial',
      error: error.message,
    });
  }
};

// Get all client testimonials
exports.getClient = async (req, res, next) => {
  try {
    const clients = await ClientSection.find();

    res.status(200).json({
      success: true,
      results: clients.length,
      data: clients,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching client testimonials',
      error: error.message,
    });
  }
};
