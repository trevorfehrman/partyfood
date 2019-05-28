const db = require('../dbConfig');

module.exports = {
     async getParty(id) {
        let party = await db('parties').where({id}).first()
        let users = await db('usersParties as up')
            .join('users as u', 'u.id', 'up.user_id')
            .where({'up.party_id': id });
        party.attendees = users
        return party;
    }
}