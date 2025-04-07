const express = require('express');
const apiRouter = require('./routes/apiRouter');
const cors = require('cors');


const bodyParser = express.json();

const app = express();

app.use(cors());
app.use(bodyParser);
app.use('/api', apiRouter);

module.exports = app;