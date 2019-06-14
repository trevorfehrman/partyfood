exports.up = function(knex, Promise) {
  return knex.schema.createTable('usersNeeds', table => {
    table.increments();
    table
      .integer('user_id')
      .unsigned()
      .references('users.id')
      .onDelete('CASCADE')
      .notNullable();
    table
      .integer('need_id')
      .unsigned()
      .references('partyNeeds.id')
      .onDelete('CASCADE')
      .notNullable();
    table
      .integer('quantity_fulfilled')
      .unsigned()
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('usersNeeds');
};
