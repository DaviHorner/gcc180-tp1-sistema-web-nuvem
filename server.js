// create an express app
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


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/nota', (req, res) => {
    notasCollection.insertOne(req.body)
      .then(result => {
        console.log(result)
      })
      .catch(error => console.error(error))
})

// start the server listening for requests
app.listen( 3000, function(){
	console.log("Server is running...")
})
