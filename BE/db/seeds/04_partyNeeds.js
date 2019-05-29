exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('partyNeeds')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('partyNeeds').insert([
        { need: 'Potato Chips', party_id: 1 },
        { need: '4 Cases Beer', party_id: 1, brought_by_id: 2, quantity: "I'll bring one case" },
        {
          need: '4 Cases Beer',
          party_id: 1,
          brought_by_id: 3,
          quantity: "I'll bring two cases of Corona"
        },
        { need: '4 Cases Beer', party_id: 1, brought_by_id: 4, quantity: "I'll get the last one" },
        { need: 'charcoal', party_id: 1, brought_by_id: 2 }
      ]);
    });
};
