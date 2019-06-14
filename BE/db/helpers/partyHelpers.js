const db = require('../dbConfig');

module.exports = {
  //* PARTIES */
  async getAllParties() {
    let parties = await db('parties as p')
      .join('users as u', 'p.host', 'u.id')
      .select('p.id', 'p.name', 'p.host', 'u.username', 'p.date');

    parties = parties.map(async party => {
      let attendees = await db('usersParties as up')
        .where({ 'up.party_id': party.id })
        .join('users as u', 'up.user_id', 'u.id')
        .select('u.username', 'u.id');
      party.attendees = attendees;
      return party;
    });

    parties = Promise.all(parties).then(results => {
      return results;
    });

    return parties;
  },

  async getParties(email) {
    let parties = await db('parties as p')
      .join('usersParties as up', 'up.party_id', 'p.id')
      .join('users as u', 'up.user_id', 'u.id')
      .where({ 'u.email': email })
      .select(
        'p.name',
        'p.date',
        'p.time',
        'p.location',
        'p.host',
        'p.image',
        'p.id',
        'p.description'
      );

    parties = parties.map(async party => {
      let host = await db('users as u')
        .where({ 'u.id': party.host })
        .select('u.username', 'u.img_url')
        .first();
      party.host = host.username;
      party.host_pic = host.img_url;
      return party;
    });

    parties = Promise.all(parties).then(results => {
      return results;
    });

    return parties;
  },

  async getParty(id) {
    let party = await db('parties as p')
      .join('users as u', 'u.id', 'p.host')
      .where({ 'p.id': id })
      .first()
      .select(
        'p.id',
        'p.name',
        'p.date',
        'p.time',
        'p.location',
        'p.image',
        'p.description',
        'u.username as host',
        'u.email',
        'u.img_url'
      );

    let users = await db('usersParties as up')
      .join('users as u', 'u.id', 'up.user_id')
      .where({ 'up.party_id': id })
      .select('u.username', 'u.email', 'u.img_url', 'u.id');

    let needs = await db('partyNeeds as pn')
      .where({ 'pn.party_id': id })
      .select(
        'pn.id',
        'pn.party_id',
        'pn.need',
        'pn.priority',
        'pn.quantity',
        'pn.quantity_fulfilled',
        'pn.quantity_unit',
        'pn.notes',
        'pn.defined'
      );

    needs = needs.map(async need => {
      let bringers = await db('usersNeeds as un')
        .where({ 'un.need_id': need.id })
        .join('users as u', 'un.user_id', 'u.id')
        .select('u.username', 'u.email', 'u.img_url', 'un.id', 'un.quantity_fulfilled');
      need.bringers = bringers;
      return need;
    });

    needs = await Promise.all(needs).then(results => {
      return results;
    });

    party.attendees = users;
    party.needs = needs;
    return party;
  },

  createParty({ name, host, date }) {
    return db('parties')
      .returning('id')
      .insert({ name, host, date });
  },

  deleteParty(id) {
    return db('parties')
      .where({ id })
      .del();
  },

  //* NEEDS */

  createNeed(need, party_id) {
    return db('partyNeeds')
      .returning('id')
      .insert({ need, party_id });
  },

  deleteNeed(id) {
    return db('partyNeeds')
      .where({ id })
      .del();
  },

  updateNeed({ need, brought_by_id, quantity }, id) {
    return db('partyNeeds')
      .where({ id })
      .returning('id')
      .update({ need, brought_by_id, quantity });
  },

  //* ATTENDEES */
  getAttendees(party_id) {
    return db('usersParties as up')
      .join('users as u', 'up.user_id', 'u.id')
      .select('u.id', 'u.username', 'u.email')
      .where({ party_id });
  },

  createAttendee(party_id, user_id) {
    return db('usersParties')
      .returning('id')
      .insert({ party_id, user_id });
  },

  deleteAttendee(party_id, user_id) {
    return db('usersParties')
      .returning('id')
      .where({ party_id, user_id })
      .del();
  }
};
