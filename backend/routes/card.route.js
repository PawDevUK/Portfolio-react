const router = require('express').Router();
const Card = require('../models/card-model.js')

router.route('/').get((req,res)=>{
    Card.find()
    .then((cards)=>{
        res.json(cards)
    })
    .catch((err)=>{
        res.status(400).json('Error:'+ err)
    })
})
module.exports = router ;