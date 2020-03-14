const express = require('express');
const router  = express.Router();
const CreditCard = require('../models/credit-card')
const JornalCategory = require('../models/jornal-category')
const {creditCards, category} = require('../utils/carga')



router.get('/carga', (req, res, next) => {
    // CARGA ABAIXO COMENTADO
    // ||
    // \/
    // products.forEach(product => {
    //   Product.create({name: product.name, ean: product.ean, imageUrl: [product.image], categoryRef: product.productCategoryRef})
    //   .then((productResult) => {console.log(productResult )})
    //   .catch((err)=>{console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', err)})
    // })
    // res.send('foi')
  });

router.get('/carga-credit-card', (req, res, next) => {
  creditCards.forEach(card => {
    CreditCard.create({name: card.name, imageUrl: card.image})
    .then((result) => {console.log(result )})
    .catch((err)=>{console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', err)})
  })
  res.send('foi')
});

router.get('/carga-category', (req, res, next) => {
  category.forEach(category => {
    JornalCategory.create({name: category.name})
    .then((result) => {console.log(result )})
    .catch((err)=>{console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', err)})
  })
  res.send('foi')
});


  module.exports = router;
