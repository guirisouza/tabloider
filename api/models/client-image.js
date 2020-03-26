var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const aws = require('aws-sdk')

const s3 = new aws.S3()

const ClientImageSchema = new Schema({
    clientRef: {type: mongoose.Schema.Types.ObjectId,ref:'Client'},
    url: String,
    key: String,
    size: Number,
    dateUploaded: {type: Date}
})

ClientImageSchema.pre('save', function(){
    if(!this.url){
        this.url =  `${process.env.APP_URL}/files/${this.key}`
    }
})

ClientImageSchema.pre('remove', function(){
    if (process.env.STORAGE_TYPE === 's3'){
        return s3.deleteObject({
            Bucket: '',
            Key: this.key,
        }).promise()
    } else {
        
    }
})

const ClientImage = mongoose.model('ClientImage', ClientImageSchema)
module.exports = ClientImage