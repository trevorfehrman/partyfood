exports.up = function(knex, Promise) {
  return knex.schema.createTable('partyNeeds', table => {
    table.increments();
    table.string('need').notNullable();
    table
      .integer('party_id')
      .unsigned()
      .notNullable()
      .references('parties.id')
      .onDelete('CASCADE');
    table
      .integer('brought_by_id')
      .unsigned()
      .references('users.id')
      .onDelete('CASCADE');
    table.string('quantity');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('partyNeeds');
};
