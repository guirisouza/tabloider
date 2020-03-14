var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const  ProductSchema = new Schema ({
    name: String,
    ean: String,
    imageUrl: [],
    categoryRef: {type: mongoose.Schema.Types.ObjectId,ref:'ProductCategory'}
})

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product