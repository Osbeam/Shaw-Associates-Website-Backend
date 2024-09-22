const express = require ("express");
const router = express.Router();
const upload = require('../middleware/upload'); // Import multer middleware


const {getHome, newHome} = require ('../controller/homeController');
const {getBlog, newBlog} = require ('../controller/blogController');
const {getClient, newClient} = require ('../controller/HomePageClientSection');
const { newUser, getUser } = require("../controller/UserRegistrationController");
const { loginUser } = require("../controller/LoginController");

//get home api
router.route('/home').get(getHome)

//Post home api
router.route('/home/content').post(newHome)

//Get blog api
router.route('/blog').get(getBlog)

//Post blog api
router.route('/blog/content').post(newBlog)

// Post Clients
router.route('/new/clientsay').post(upload.single('image'), newClient);

//Get Clients
router.route('/client').get(getClient)

//Post user
router.route('/newUser').post(newUser)

//Get user
router.route('/user').get(getUser)

// POST /api/login - User login with validation
router.route('/login').post(loginUser);

module.exports = router