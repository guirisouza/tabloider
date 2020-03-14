const express = require('express');
const router  = express.Router();
const Product = require('../models/product')


router.get('/', (req, res, next) => {
    Product.find({})
    .then(products=>{
        res.status('200').json({data: products})
    })
    .catch(err =>{
        res.status('500').json({error: 'problema ao retornar os itens'})
    })
  });


module.exports = router;
