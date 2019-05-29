const express = require('express');
const router = express.Router();

const helpers = require('../../../db/helpers/partyHelpers');

router.get('/:partyID', (req, res, next) => {
  helpers
    .getParty(req.params.partyID)
    .then(response => res.status(200).json(response))
    .catch(next);
});

router.post('/:partyId/need', ({ body: { need }, params: { partyId } }, res, next) => {
  helpers
    .createNeed(need, partyId)
    .then(response => res.status(200).json(response))
    .catch(next);
});

router.delete('/:partyId/need/:needId', ({ params: { needId } }, res, next) => {
  console.log(needId);
  helpers
    .deleteNeed(needId)
    .then(response => res.status(200).json(response))
    .catch(next);
});

module.exports = router;
