
const multer = require('multer')
const path = require('path')
const crypto = require('crypto')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk');

const IAM_USER_KEY = process.env.AWS_ACCESS_KEY
const IAM_USER_SECRET = process.env.AWS_SECRET_ACCESS_KEY
const REGION = process.env.AWS_DEFAULT_REGION

const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null,  path.resolve(__dirname, '..', 'uploads'))
        },
        fileName: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                file.key = `${hash.toString('hex')}-${file.originalname}`

                cb(null, fileName)
            })
        }
    }),
    s3: multerS3({
        s3: new aws.S3(),
            bucket: 'meujornalzinho/assets',
            contentType: multerS3.AUTO_CONTENT_TYPE,
            acl: 'public-read',
            key: (req, file, cb) => {
                crypto.randomBytes(16, (err, hash) => {
                    if (err) cb(err);
    
                    const fileName = `${hash.toString('hex')}-${file.originalname}`
    
                    cb(null, fileName)
                })
            }
    })

}

module.exports = {
    dest: path.resolve(__dirname, '..', 'uploads'),
    storage: storageTypes[process.env.STORAGE_TYPE],
    limits: {
        fileSize: 2*1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];

        if(allowedMimes.includes(file.mimetype)){
            cb(null, true);
        } else {
            cb(new Error("Invalid File Type"))
        }
    }
};