const { Router } = require('express');
const router = new Router();
const fizzBuzz = require('../models/fizzBuzz');

router.get('/', (req, res) => {
  const { number } = req.query;

  const data = fizzBuzz(number);

  res.status(200).send({
    success: true,
    message: `Result of fizzBuzz with ${number}`,
    payload: data,
  });
});

module.exports = router;
