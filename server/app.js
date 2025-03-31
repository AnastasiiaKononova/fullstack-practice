const express = require('express');
const apiRouter = require('./routes/apiRouter');


const bodyParser = express.json();

const app = express();

app.use(bodyParser);
app.use('/api', apiRouter);

module.exports = app;