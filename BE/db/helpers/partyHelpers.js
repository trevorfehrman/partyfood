const db = require('../dbConfig');

module.exports = {
  async getParties() {
    let parties = await db('parties as p')
      .join('users as u', 'p.host', 'u.id')
      .select('p.id', 'p.name', 'p.host', 'u.username', 'p.date');

    parties = parties.map(async party => {
      let attendees = await db('usersParties as up')
        .where({ 'up.party_id': party.id })
        .join('users as u', 'up.user_id', 'u.id');
      console.log({ attendees });
      party.attendees = attendees;
      return party;
    });

    parties = await Promise.all(parties).then(results => {
      console.log({ results });
      return results;
    });

    console.log({ parties });
    return parties;
  },

  async getParty(id) {
    let party = await db('parties')
      .where({ id })
      .first();
    let users = await db('usersParties as up')
      .join('users as u', 'u.id', 'up.user_id')
      .where({ 'up.party_id': id });
    let needs = await db('partyNeeds as pn')
      .leftJoin('users as u', 'u.id', 'pn.brought_by_id')
      .where({ 'pn.party_id': id })
      .select('pn.id', 'pn.need', 'pn.brought_by_id', 'pn.quantity', 'u.username');
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
  }
};
