const db = require('../dbConfig');

module.exports = {
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
    console.log(need, brought_by_id, quantity, id)
    return db('partyNeeds')
      .where({ id })
      .returning(id)
      .update({ need, brought_by_id, quantity});
  }
};
