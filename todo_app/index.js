const express = require('express');

var userAPI = require('./api/router/users.router');

const app = express();

const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Localhost', { useFindAndModify: true, useCreateIndex: true });

// app.set('view engine', 'pug');
// app.set('views', './views');

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.use('/userAPI', userAPI)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));