var path = require('path');
var express = require('express');
var volleyball = require('volleyball');
var db = require('./db');
var Image = db.model('imageDb');
//var FlashCard = db.model('flashcard');
var bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });


var app = express(); // Create an express app!
module.exports = app; // Export it so it can be require('')'d

// logging middleware for HTTP requests and responses
app.use(volleyball);

// Parse our POST and PUT bodies.
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

// paths to static resources we will establish routes for further down
var angularPath = path.join(__dirname, '../node_modules');
var publicPath = path.join(__dirname, '../browser');
var imagePath = path.join(__dirname, '../');

// __dirname: http://nodejs.org/docs/latest/api/globals.html#globals_dirname
// path.join: http://nodejs.org/api/path.html#path_path_join_path1_path2

// When our server gets a request and the url matches something in our browser
// folder, serve up that file (e.g. app.js, style.css).
// NOTE: this also automatically maps `GET /` to `GET /index.html`!
app.use(express.static(publicPath));
// If we request the angular source code, serve it up from node_modules
app.use(express.static(angularPath));
// this route will handle all the src image request
app.use(express.static(imagePath));


app.get('/allImages', function (req, res, next) {
    Image.findAll()
        .then(function(images){
            res.send(images)
        }).catch(next);
});

app.post('/uploadImage', upload.single('file'), function (req,res,next) {
    console.log(req.body);
    console.log(req.file);
    let imageObj = req.body;
    imageObj.url = req.file.path;
    console.log('image object about to create..........',imageObj)
    Image.create(imageObj)
        .then(function(){
            res.json({success: true});
        }).catch(next)
});

app.use(function (err, req, res, next) {
console.error(err)
console.error(err.stack)
res.status(err.status || 500).send(err.message || 'Internal server error.')
})
