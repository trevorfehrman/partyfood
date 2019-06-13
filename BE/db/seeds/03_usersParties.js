exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('usersParties')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('usersParties').insert([
        { id: 1, user_id: 1, party_id: 1 },
        { id: 2, user_id: 2, party_id: 1 },
        { id: 3, user_id: 3, party_id: 1 },
        { id: 4, user_id: 1, party_id: 2 },
        { id: 5, user_id: 4, party_id: 1 },
        { id: 6, user_id: 5, party_id: 1 },
        { id: 7, user_id: 6, party_id: 1 },
        { id: 8, user_id: 7, party_id: 1 },
        { id: 9, user_id: 8, party_id: 1 },
        { id: 10, user_id: 9, party_id: 1 }
      ]);
    });
};
