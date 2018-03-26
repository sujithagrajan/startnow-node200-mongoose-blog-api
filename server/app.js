const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// mongoose.connect('mongodb://localhost/my-blog', { useMongoClient: true });
mongoose.connect('mongodb://localhost/my-blog');
mongoose.Promise = Promise;

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('hello');
    
});
app.use('/api/users', require('./routes/users'));
app.use('/api/blogs', require('./routes/blogs'));
module.exports = app;