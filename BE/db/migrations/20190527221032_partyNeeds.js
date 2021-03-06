exports.up = function(knex, Promise) {
  return knex.schema.createTable('partyNeeds', table => {
    table.increments();
    table
      .integer('party_id')
      .unsigned()
      .notNullable()
      .references('parties.id')
      .onDelete('CASCADE');
    table.string('need').notNullable();
    table.integer('priority').notNullable();
    table
      .integer('quantity')
      .unsigned()
      .notNullable();
    table
      .integer('quantity_fulfilled')
      .unsigned()
      .notNullable();
    table.string('quantity_unit');
    table.string('notes', 7000);
    table.boolean('defined').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('partyNeeds');
};
