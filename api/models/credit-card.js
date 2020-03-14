var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const  CreditCardSchema = new Schema ({
    name: String,
    imageUrl: String
})

const CreditCard = mongoose.model('CreditCard', CreditCardSchema)
module.exports = CreditCard