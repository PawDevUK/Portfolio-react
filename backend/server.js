const mongoose = require('mongoose')
const createConnection = require('mongoose')
const express = require('express')
const cors = require('cors')
const app  = express()


app.use(cors())
app.use(express.json());
require('dotenv').config();  // npm install dotenv
const URI = process.env.ATLAS_URI;


const port = process.env.PORT || 5000

//Mongodb
 mongoose.connect(URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
})


const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
})



//routes
app.get('/',(req,res)=>{
    res.send('Hello world')
})
// card route
const cardRoute = require('./routes/card.route.js')
app.use('/card', cardRoute)

//cardStack route 
const cardStackRoute = require('./routes/cardStack.routes.js')
app.use('/stack', cardStackRoute)


app.listen(port,()=>{
    console.log(`Express app runs at http://localhost:${port}`);
})