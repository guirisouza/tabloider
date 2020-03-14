const express = require('express');
const router  = express.Router();
const CreditCard = require('../models/credit-card')


router.get('/', (req, res, next) => {
    CreditCard.find({})
    .then(products=>{
        res.status('200').json({data: products})
    })
    .catch(err =>{
        res.status('500').json({error: 'problema ao retornar os itens'})
    })
  });


module.exports = router;
