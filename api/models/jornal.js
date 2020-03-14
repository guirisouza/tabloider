var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const JornalSchema = new Schema({
    name: String,
    jornalCategoryRef: {type: mongoose.Schema.Types.ObjectId,ref:'JornalCategory'}
});

const Jornal = mongoose.model('Jornal', JornalSchema)

module.exports = Jornal