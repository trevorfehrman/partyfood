exports.up = function(knex, Promise) {
  return knex.schema.createTable('usersParties', table => {
    table.increments();
    table
      .integer('user_id')
      .unsigned()
      .references('users.id')
      .onDelete('CASCADE');
    table
      .integer('party_id')
      .unsigned()
      .references('parties.id')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('usersParties');
};
