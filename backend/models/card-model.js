const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = new Schema({
    src:{
        type:String,
        required:true
    },
    alt:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    webHref:{
        href:String,
        button:String
    }
}) 

const Card = mongoose.model('Card',cardSchema)

module.exports = Card