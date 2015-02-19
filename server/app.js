var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
module.exports = app;

var publicPath = path.join(__dirname, '../public');
var indexHtmlPath = path.join(__dirname, '../index.html');

var FlashCardModel = require('./models/flash-card-model');

app.use(express.static(publicPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(indexHtmlPath);
});

app.get('/cards', function (req, res) {

    var modelParams = {};

    if (req.query.category) {
    	modelParams.category = req.query.category;
    }

    FlashCardModel.find(modelParams, function (err, cards) {
        setTimeout(function () {
            res.send(cards);
        }, Math.random() * 1000);
    });

});

app.post('/cards', function (req, res) {

    // Reference schema for what is expected as the POST body.
    var cardData = req.body;

    FlashCardModel.create(cardData).then(function (card) {
        res.status(200).end();
    });

});