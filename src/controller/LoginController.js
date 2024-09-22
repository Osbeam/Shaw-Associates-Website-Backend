const User = require('../models/UserRegistration');

// Controller function for user login
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ Email: email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Check if password matches
        if (user.Password !== password) {
            return res.status(401).json({
                success: false,
                message: 'Incorrect password'
            });
        }

        // If login is successful
        res.status(200).json({
            success: true,
            message: 'Login successful',
            data: {
                userId: user._id,
                email: user.Email,
                name: user.Name
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};
