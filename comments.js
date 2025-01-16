// create web server
// create a web server that listens on port 3000 and serves the following responses:
// 1. GET /comments - returns a list of all comments
// 2. POST /comments - creates a new comment
// 3. GET /comments/:id - returns a single comment with the id
// 4. PUT /comments/:id - updates a single comment with the id
// 5. DELETE /comments/:id - deletes a single comment with the id

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const app = express();

app.use(bodyParser.json());

const comments = [
  { id: 1, body: 'comment 1' },
  { id: 2, body: 'comment 2' },
  { id: 3, body: 'comment 3' }
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.json(req.body);
});

app.get('/comments/:id', (req, res) => {
  const comment = _.find(comments, { id: parseInt(req.params.id) });
  res.json(comment);
});

app.put('/comments/:id', (req, res) => {
  const comment = _.find(comments, { id: parseInt(req.params.id) });
  comment.body = req.body.body;
  res.json(comment);
});

app.delete('/comments/:id', (req, res) => {
  _.remove(comments, { id: parseInt(req.params.id) });
  res.json({ message: 'comment deleted' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// run this file in the terminal
// node comments.js
// open the browser and navigate to http://localhost:3000/comments
// you should see the comments array
// open Postman and test the POST, GET, PUT, DELETE requests
// POST request to http://localhost:3000/comments
// with body: { "id": 4, "body": "comment 4" }
// GET request to http://localhost:3000/comments/4
// PUT request to http://localhost:3000/comments/4
// with body: { "body": "comment 4 updated