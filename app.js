const express = require('express');

const app = express();
const fizzBuzzRouter = require('./routes/fizzBuzz');

app.use(express.json());
app.use('/fizzbuzz', fizzBuzzRouter);

module.exports = app;
