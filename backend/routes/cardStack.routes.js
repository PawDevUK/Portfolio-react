const router = require('express').Router();
const CardStackTest = require('../models/card-stack-model.js')


router.route('/').get((req,res)=>{
    CardStackTest.find()
    .then((stack)=>{
        res.json(stack)
    })
    .catch((err)=>{
        res.status(400).json('Error:'+ err)
    })
})


router.route('/add').post((req,res)=>{
    const img = req.body.img;
    const title = req.body.title;
    const text = req.body.text;
    const  webHref = req.body. webHref;

    const newStack = new CardStack({img,title,text,webHref});

    newStack.save()
    .then(()=> res.json('Stack added'))
    .catch(err => res.status(400).json('error:' + err))
});


module.exports = router ;