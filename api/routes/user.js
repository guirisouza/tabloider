const express = require('express');
const router  = express.Router();
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Client = require('../models/client')



router.post('/signup', (req, res, next) => {
    console.log(req.body)
    User.find({email: req.body.email})
        .then(user => {
            if(user.length >= 1){
                res.status(409).send({
                    message: 'Usuário já existente'
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash)=>{
                    if(err){
                        return res.status(500).json({
                            message: err
                        })
                    } else {
                        const user = new User({
                            email: req.body.email,
                            password: hash
                        });
                        user
                            .save()
                            .then(result => {
                                console.log('userr', result)
                                Client.create({name: '', footerConfig: [], imageUrl:'', jornalsImages: [], userRef: result._id})
                                res.status(201).json({
                                    message: 'user created'
                                })
                            })
                            .catch(err => {
                                res.status(500).json({
                                    message: err
                                })
                            })
                    }
                })
            }
        })
})

router.post('/login', (req, res, next) => {
    User.find({email: req.body.email })
        .exec()
        .then(user => {
            if(user.length < 1){
                res.status(404).json({
                    message: 'Mail not found, user doesn\'t exists'
                })
            } 
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (result===false){
                    return res.status(401).json({
                        message: 'Auth failed'
                    })
                }
                if (result) {
                    const token = jwt.sign({
                        email: user[0].email,
                        userId: user[0]._id                        
                    }, process.env.JWT_KEY,
                    {
                        expiresIn: "1h"
                    }     
                    )
                    return res.status(200).json({
                        message: 'Auth successful',
                        token: token
                    })
                }
            });

        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
})

module.exports = router;
