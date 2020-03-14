const express = require('express');
const router  = express.Router();
const Client = require('../models/client')


router.patch('/', (req, res, next)=>{
    console.log(req.body)

    Client.findByIdAndUpdate('5e6cf6f5dc912127cc7b81b2', {imageUrl:'sdaf'}, {new: true,  upsert: true})
    .then(result=> console.log(result))
    .catch(err => console.log(err))

})

module.exports = router