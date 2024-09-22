const mongoose = require('mongoose');

const UserRegistration = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/, // Basic email format validation
        unique: true,
    },
    Password: {
        type: String,
        required: true,
    },
    ConfirmPassword: {
        type: String,
        required: true,
    },
});

// Optional: Add a pre-save hook to ensure Password and ConfirmPassword match
UserRegistration.pre('save', function (next) {
    if (this.Password !== this.ConfirmPassword) {
        return next(new Error('Passwords do not match'));
    }
    next();
});

module.exports = mongoose.model('User', UserRegistration);
