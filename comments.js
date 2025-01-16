// create web server
const express = require('express');
const app = express();
const port = 3000;

// get comments from comments.json
const fs = require('fs');
const comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// set up the server
app.use(express.static('public'));
app.get('/comments', (req, res) => {
  res.send(comments);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});