require('dotenv').config();
const session    = require("express-session");

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const mongoose     = require('mongoose');
const path         = require('path');
const fileUpload   = require('express-fileupload')

mongoose
  .connect('mongodb+srv://admin:123qweasddas@cluster0-lunsv.mongodb.net/meujornalzinho', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();


// Middleware Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload());


const cors = require('cors');
app.use(
    cors({
      credentials: true,
      origin: [process.env.FRONT_URL] // <== this will be the URL of our React app (it will be running on port 3000)
    })
  );
  
const index = require('./routes/index');
const product = require('./routes/products');
const creditCard = require('./routes/credit-card');
const user = require('./routes/user')
const jornalCategory = require('./routes/jornal-category')
const uploadFile = require('./routes/upload-file')
const client = require('./routes/client')

app.use('/api/', index);
app.use('/api/product/', product);
app.use('/api/credit-card/', creditCard);
app.use('/api/user/', user);
app.use('/api/jornal-category/', jornalCategory);
app.use('/api/upload/', uploadFile)
app.use('/api/client/', client)
// app.use('/api', require('./routes/task-routes'));
// app.use('/', router);
module.exports = app;
