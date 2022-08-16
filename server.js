// create an express app
const express = require("express");
const app = express();

const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// start the server listening for requests
app.listen( 3000, function(){
	console.log("Server is running...")
})
