exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'Trevor', email: 'trevorfehrman@gmail.com', password: 'password' },
        { id: 2, username: 'Lauren', email: 'laurenworthington@gmail.com', password: 'password' },
        { id: 3, username: 'Holden', email: 'holdenbucher@gmail.com', password: 'password' }
      ]);
    });
};
