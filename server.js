// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const path = require('path'); 
// const databaseConnection = require('./src/config/database');

// // Load environment variables
// dotenv.config({ path: './src/config/config.env' });

// const app = express();

// // Enable CORS with specific origin
// app.use(cors({
//     origin: ['https://shawassociates.in', 'http://localhost:3000','http://77.37.45.224:3001'], // Allow your domain and localhost
//     credentials: true, // Enable if frontend sends cookies or credentials
// }));

// // Enable parsing of JSON bodies in requests
// app.use(express.json());

// // Connect to the database
// databaseConnection();

// // Define the routes
// const route = require('./src/routes/route');
// app.use('/api', route);

// // Serve static files from 'uploads' directory
// app.use('/uploads', express.static(path.join(__dirname, 'src/uploads')));

// // Serve static files for React build (in case you're serving React from the same server)
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, 'client/build')));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// }

// // Define a root route
// app.get('/', (req, res) => {
//     res.send('Server is running on port 3002');
// });

// // Error handling for undefined routes
// app.use((req, res, next) => {
//     res.status(404).json({
//         success: false,
//         message: 'Page not found'
//     });
// });

// // General error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({
//         success: false,
//         message: 'Something went wrong',
//         error: err.message
//     });
// });

// // Set the port and start the server
// const PORT = process.env.PORT || 3002;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
































const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path'); 
const databaseConnection = require('./src/config/database');

// Load environment variables
dotenv.config({ path: './src/config/config.env' });

const app = express();

// Enable CORS with specific origin
const allowedOrigins = ['https://shawassociates.in', 'http://localhost:3000', 'http://77.37.45.224:3001'];
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

// Enable parsing of JSON bodies in requests
app.use(express.json());

// Connect to the database
databaseConnection();

// Define the routes
const route = require('./src/routes/route');
app.use('/api', route);

// Serve static files from 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'src/uploads')));

// Serve static files for React build
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Define a root route
app.get('/', (req, res) => {
    res.send('Server is running on port 3002');
});

// Error handling for undefined routes
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Page not found'
    });
});

// General error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error: err.message
    });
});

// Set the port and start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
