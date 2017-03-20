var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    // res.send('<h1>hello world</h1>');
    res.render('pages/index');
});

app.listen(3000, function () {
    console.log('app listening in port 3000');
});
