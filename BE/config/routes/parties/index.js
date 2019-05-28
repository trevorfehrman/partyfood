const express = require('express');
const router = express.Router();

const helpers = require('../../../db/helpers/partyHelpers');

router.get('/:partyID', (req, res, next) => {
  helpers
    .getParty(req.params.partyID)
    .then(response => res.status(200).json(response))
    .catch(next);
});
module.exports = router;
