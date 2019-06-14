exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('usersNeeds')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('usersNeeds').insert([
        { id: 1, user_id: 2, need_id: 1, quantity_fulfilled: 4 },
        { id: 2, user_id: 2, need_id: 2, quantity_fulfilled: 2 },
        { id: 3, user_id: 3, need_id: 5, quantity_fulfilled: 1 },
        { id: 4, user_id: 3, need_id: 7, quantity_fulfilled: 1 },
        { id: 5, user_id: 4, need_id: 8, quantity_fulfilled: 2 },
        { id: 6, user_id: 5, need_id: 8, quantity_fulfilled: 1 },
        { id: 7, user_id: 6, need_id: 10, quantity_fulfilled: 1 },
        { id: 8, user_id: 6, need_id: 11, quantity_fulfilled: 2 },
        { id: 9, user_id: 7, need_id: 13, quantity_fulfilled: 1 },
        { id: 10, user_id: 8, need_id: 15, quantity_fulfilled: 1 },
      ]);
    });
};
