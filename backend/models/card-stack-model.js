const mongoose = require('mongoose'); //imports mongoose

const Schema = mongoose.Schema;  //creates mongoose schema

const cardStackSchema = new Schema({     //creates new mongoose schema
    img:{
        type:String // required type of data
    },
    title:{
        type:String
    },
    text:{
        type:String
    },
    webHref:{
        type:String
    },
}) 

const CardStackTest = mongoose.model('CardStack',cardStackSchema) // assigning constant cardStackSchema to const CardStack with name CardStack

module.exports = CardStackTest  //exports schema