var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
require('dotenv').config();
var app = express();

var apiUrl = process.env.APIURL;
var detailUrl = process.env.DETAILURL;

app.use(express.static('static'));
app.use(bodyParser.json()); // to support JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', function (req, res) {
    res.render('pages/stad');
});

app.get('/stad', function (req, res) {
    res.render('pages/stad');
});

app.post('/result', function(req, res) {
    // res.send(req.body.place);
    var place = req.body.place;
    load(place, callback);
    function callback(data) {
      res.render('pages/result', { properties: data });
    }
});

app.get('/result/:Id', function(req, res) {
    var id = req.params.Id;
    request(detailUrl + req.params.Id, function (error, response, body) {
        var data = JSON.parse(body);
        res.render('pages/detail', {properties: data});
    });
});

function load(values, callback) {
  var url = apiUrl + '/' + values + '/100000-250000';
  request(url, function(err, res, body) {
    if (err) console.warn(err);
    callback(JSON.parse(body));
  });
}

app.listen(3000, function () {
    console.log('app listening in port 3000');
});
