const Home = require ('../models/homeModel')


// Get data via api/v1/Homes
exports.getHome = async (req, res, next) => {
    const home = await Home.find();
    
    res.status(200).json({
        success : true,
        results : home.length,
        data : home
    })
}

//Post api for Home
exports.newHome = async (req, res, next) => {
    const home = await Home.create(req.body); // createing body and storing data in Home

    res.status(200).json({
        success : true,
        message : 'Home created successfull.',
        data : home
    })
}