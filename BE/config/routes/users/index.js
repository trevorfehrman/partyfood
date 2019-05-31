const express = require('express');
const router = express.Router();

const helpers = require('../../../db/helpers/usersHelpers');

router.get('/', (req, res, next) => {
  helpers.getUsers().then(response => res.status(200).json(response));
});

router.post('/', ({ body }, res, next) => {
  helpers
    .createUser(body)
    .then(response => res.status(200).json(response))
    .catch(next);
});

module.exports = router;
