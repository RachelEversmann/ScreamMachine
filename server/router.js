var express = require('express');
var logger = require('morgan');
var db = require(__dirname + '/db/index');



var app = express();

app.use(logger('dev'));
app.use(express.static('client'));
app.use('/addons', express.static('client/models/p5/'));


app.get('/getUsers', function(req, res) {
	db.getUsers()
		.then(function(result) {
			res.send(result);
		})
		.catch(function(error) {
			res.send('Error getting users.');
		});
});

app.get('/login', function(req, res) {
  res.send('Welcome to the login endpoint');
});

app.get('/profile', function(req, res) {
  res.send('Welcome to the profile endpoint');
});

app.get('/db', db.loggerTest, function(req, res) {
  db.query()
    .then(function(result) {
      res.send(result);
    })
    .catch((err) => {
      console.log('Query Error\n',err);
    })
});

module.exports = app;