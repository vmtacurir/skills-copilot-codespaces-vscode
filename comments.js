// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var commentsFile = path.join(__dirname, 'comments.json');

app.use(express.static('public'));
app.use(bodyParser.json());

// Get comments
app.get('/comments', function(req, res) {
  fs.readFile(commentsFile, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    res.json(JSON.parse(data));
  });
});

// Add comments
app.post('/comments', function(req, res) {
  fs.readFile(commentsFile, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    var comments = JSON.parse(data);
    var newComment = {
      id: Date.now(),


