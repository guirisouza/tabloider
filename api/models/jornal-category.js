var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const  JornalCategorySchema = new Schema ({
    name: String,
})

const JornalCategory = mongoose.model('JornalCategory', JornalCategorySchema)
module.exports = JornalCategory