const mongoose =require('mongoose');

const dbUrl = "mongodb://localhost:27017/crypto-coin-tracker";

mongoose.connect(dbUrl);

const dbConnection = mongoose.connection;

// set event listeners
dbConnection.on('open', () => {
    console.log('Connected to MongoDb')
})

dbConnection.on('error', (err)=> {
    console.log ('Mongoose connection error: ${err}')
})
