const express = require('express')
const router  = express.Router();
const multer = require('multer');
const multerConfig = require('../config/multer')
const ClientImage = require('../models/client-image')

router.post('/:id', multer(multerConfig).single('file'), async (req, res, next)=> {
  const{ originalname, size, key, location: url = ""} = req.file;
  console.log('aquiiiiiiiiiiiiiiiiii', req.file)
  console.log(req.params.id)
  await ClientImage.create({ clientRef:  req.params.id, size: size, key: originalname, url:req.file.location, dateUploaded: Date.now()})
    .then(result=>{
      return res.json({respose: result})
    })
})

router.get('/:id', async (req,res,next)=>{
  await ClientImage.find({clientRef:req.params.id}).sort('-dateUploaded')
    .exec()
    .then(result=>{
      return res.json({respose: result[0]})
    })
})



module.exports = router;


