var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const  ProductCategorySchema = new Schema ({
    name: String
})

const ProductCategory =  mongoose.model('ProductCategory', ProductCategorySchema)

module.exports = ProductCategory