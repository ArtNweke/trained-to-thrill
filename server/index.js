var express = require('express');
var swig = require('swig');

var app = express();

app.engine('html', swig.renderFile);
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.use('/trained-to-thrill/static', express.static(__dirname + '/../www/static'));

app.get(RegExp('^/(trained-to-thrill)?$'), function(req, res) {
  res.redirect('/trained-to-thrill/');
});

app.get('/trained-to-thrill/', function(req, res) {
  res.render('../www/index.html');
});

module.exports = app;