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

router.delete('/:userId', ({ params: { userId } }, res, next) => {
  helpers
    .deleteUser(userId)
    .then(response => res.status(200).json(response))
    .catch(next);
});

router.put('/:userId', ({ params: { userId }, body }, res, next) => {
  helpers
    .updateUser(body, userId)
    .then(response => res.status(200).json(response))
    .catch(next);
});

module.exports = router;
