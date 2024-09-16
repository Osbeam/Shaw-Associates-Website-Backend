const mongoose = require ('mongoose');


const databaseConnection = () =>{mongoose.connect(process.env.DB_URI)
    .then(con =>{
        console.log(`MongoDb database connected to ${con.connection.host}`);
    })
    .catch(err =>{
        console.log(`database coonection error: ${err}`);
    })
}
module.exports = databaseConnection;