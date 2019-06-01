const express = require('express');
const router = express.Router();

const helpers = require('../../../db/helpers/partyHelpers');

router.get('/', (req, res, next) => {
  helpers
    .getParties()
    .then(response => res.status(200).json(response))
    .catch(next);
});

router.get('/:partyId', (req, res, next) => {
  helpers
    .getParty(req.params.partyId)
    .then(response => res.status(200).json(response))
    .catch(next);
});

router.post('/', ({ body }, res, next) => {
  helpers
    .createParty(body)
    .then(response => res.status(200).json(response))
    .catch(next);
});

router.delete('/:partyId', (req, res, next) => {
  helpers
    .deleteParty(req.params.partyId)
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
  helpers
    .deleteNeed(needId)
    .then(response => res.status(200).json(response))
    .catch(next);
});

router.put('/:partyId/need/:needId', ({ params: { needId }, body }, res, next) => {
  helpers
    .updateNeed(body, needId)
    .then(response => res.status(200).json(response))
    .catch(next);
});

module.exports = router;
