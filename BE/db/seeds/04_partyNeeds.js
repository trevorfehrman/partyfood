
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('partyNeeds').del()
    .then(function () {
      // Inserts seed entries
      return knex('partyNeeds').insert([
        
       
      ]);
    });
};
