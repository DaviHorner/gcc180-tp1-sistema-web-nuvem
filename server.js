// create an express app
/*
const express = require("express");
const bodyParser= require('body-parser')
const app = express();

const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

MongoClient.connect(connectionString, 
    { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('gcc180')
    const noticia = db.collection('notas')
  })
  .catch(error => console.error(error))

// use the express-static middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))



// Read
app.get('/', (req, res) => {
    db.collection('notas').find().toArray()
    .then(results => { 
        console.log(results)
    })
    .catch(error => console.error(error))
    
})

app.post('/nota', (req, res) => {
    notasCollection.insertOne(req.body)
      .then(result => {
        console.log(result)
      })
      .catch(error => console.error(error))
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
*/