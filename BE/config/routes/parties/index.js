const express = require('express');
const router = express.Router();
const { authCheck } = require('../authRoutes');

const helpers = require('../../../db/helpers/partyHelpers');

//** PARTIES */
router.get('/allParties', (req, res, next) => {
  helpers
    .getAllParties()
    .then(response => res.status(200).json(response))
    .catch(next);
});

router.get('/', ({ body: { email } }, res, next) => {
  helpers
    .getParties(email)
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

//* NEEDS */
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

//* ATTENDESS */

router.get('/:partyId/attendees', ({ params: { partyId } }, res, next) => {
  helpers
    .getAttendees(partyId)
    .then(response => res.status(200).json(response))
    .catch(next);
});

router.post('/:partyId/attendees', ({ params: { partyId }, body: { userId } }, res, next) => {
  console.log({ partyId, userId });
  helpers
    .createAttendee(partyId, userId)
    .then(response => res.status(200).json(response))
    .catch(next);
});

router.delete(
  '/:partyId/attendees/:attendeeId',
  ({ params: { partyId, attendeeId } }, res, next) => {
    helpers
      .deleteAttendee(partyId, attendeeId)
      .then(response => res.status(200).json(response))
      .catch(next);
  }
);

module.exports = router;
