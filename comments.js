// create web server
// const express = require('express');

// mock the express app
const express = function() {
    return {
        use: function() {},
        get: function() {},
        listen: function() {}
    };
};
Object.defineProperty(express, 'static', {
    get: () => () => {}
});

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