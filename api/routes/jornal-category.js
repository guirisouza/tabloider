const express = require('express');
const router  = express.Router();
const JornalCategory = require('../models/jornal-category')


router.get('/', (req, res, next) => {
    JornalCategory.find({})
    .then(products=>{
        res.status('200').json({data: products})
    })
    .catch(err =>{
        res.status('500').json({error: 'problema ao retornar os itens'})
    })
  });


module.exports = router;
