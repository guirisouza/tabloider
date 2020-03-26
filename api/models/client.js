var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const  ClientSchema = new Schema ({
    name: String,
    footerConfig: [],
    jornalsImages: [],
    userRef: {type: mongoose.Schema.Types.ObjectId,ref:'User'}
})

const Client = mongoose.model('Client', ClientSchema)
module.exports = Client