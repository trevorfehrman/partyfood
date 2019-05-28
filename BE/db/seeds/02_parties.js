
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('parties').del()
    .then(function () {
      // Inserts seed entries
      return knex('parties').insert([
        {id: 1, name: "Trevor's Bday", host: 2, date: "July 14"},
      ]);
    });
};
