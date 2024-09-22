const UserReg = require ('../models/UserRegistration');

// Post user registration 
exports.newUser = async (req, res, next) => {
    const userReg = await UserReg.create(req.body);

    res.status(200).json({
        success : true,
        message : "User created successfully",
        data: userReg
    })
}

// Get user registared data
exports.getUser = async (req, res, next) =>{
    const userReg = await UserReg.find();

    res.status(200).json({
        success: true,
        message: 'User data retrieved successfully',
        count: userReg.length, 
        data: userReg
    });
    
}