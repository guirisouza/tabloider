const fs = require('fs');
const AWS = require('aws-sdk');
const express = require('express')
const router  = express.Router();
const Busboy = require('busboy');


const IAM_USER_KEY = process.env.AWS_ACCESS_KEY
const IAM_USER_SECRET = process.env.AWS_SECRET_ACCESS_KEY
const BUCKET_NAME = 'meujornalzinho/assets'

function uploadToS3(file) {
    let s3bucket = new AWS.S3({
      accessKeyId: IAM_USER_KEY,
      secretAccessKey: IAM_USER_SECRET,
      Bucket: BUCKET_NAME
    });
    s3bucket.createBucket(function () {
        var params = {
          Bucket: BUCKET_NAME,
          Key: file.name,
          Body: file.data
        };
        s3bucket.upload(params, function (err, data) {
          if (err) {
            console.log('error in callback');
            console.log(err);
          }
          console.log('success');
          console.log(data);
        });
    });
  }


router.post('/', (req, res, next)=> {
    // This grabs the additional parameters so in this case passing in
    // "element1" with a value.
    const element1 = req.body.element1;

    var busboy = new Busboy({ headers: req.headers });

    // The file upload has completed
    busboy.on('finish', function() {
      console.log('Upload finished');
      
      // Your files are stored in req.files. In this case,
      // you only have one and it's req.files.element2:
      // This returns:
      // {
      //    element2: {
      //      data: ...contents of the file...,
      //      name: 'Example.jpg',
      //      encoding: '7bit',
      //      mimetype: 'image/png',
      //      truncated: false,
      //      size: 959480
      //    }
      // }
      
      // Grabs your file object from the request.
      const file = req.files.element2;
      console.log(file);
      
      // Begins the upload to the AWS S3
      uploadToS3(file);
    });

    req.pipe(busboy);
})



module.exports = router;


