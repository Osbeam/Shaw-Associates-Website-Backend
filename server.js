const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path'); 
const databaseConnection = require('./src/config/database');

// Load environment variables
dotenv.config({ path: './src/config/config.env' });

const app = express();

// Enable CORS for all routes
app.use(cors());

// Enable parsing of JSON bodies in requests
app.use(express.json());

// Connect to the database
databaseConnection();



// Define the routes
const route = require('./src/routes/route');
app.use('/api', route);


// Serve static files from 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'src/uploads')));

// Set the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
