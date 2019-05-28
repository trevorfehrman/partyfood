
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('usersParties').del()
    .then(function () {
      // Inserts seed entries
      return knex('usersParties').insert([
        {id: 1, user_id: 1, party_id: 1},
        {id: 2, user_id: 2, party_id: 1},
        {id: 3, user_id: 3, party_id: 1},
      ]);
    });
};
