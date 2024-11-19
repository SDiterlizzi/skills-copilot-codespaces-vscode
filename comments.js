// Create web server
// npm install express
// npm install body-parser
// npm install nodemon

// Import express
const express = require('express');
// Import body-parser
const bodyParser = require('body-parser');
// Import mongoose
const mongoose = require('mongoose');

// Create express app
const app = express();

// Connect to mongoDB
mongoose.connect('mongodb://localhost/comments');
mongoose.Promise = global.Promise;

// Import the model
const Comment = require('./models/comment');

// Use body-parser
app.use(bodyParser.json());

// Create a route to get all comments
app.get('/comments', (req, res) => {
  Comment.find().then((comments) => {
    res.json(comments);
  });
});

// Create a route to get a comment by id
app.get('/comments/:id', (req, res) => {
  Comment.findById(req.params.id).then((comment) => {
    res.json(comment);
  });
});

// Create a route to create a comment
app.post('/comments', (req, res) => {
  Comment.create(req.body).then((comment) => {
    res.json(comment);
  });
});

// Create a route to update a comment
app.put('/comments/:id', (req, res) => {
  Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((comment) => {
    res.json(comment);
  });
});

// Create a route to delete a comment
app.delete('/comments/:id', (req, res) => {
  Comment.findByIdAndRemove(req.params.id).then((comment) => {
    res.json(comment);
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

