exports.up = function(knex, Promise) {
  return knex.schema.createTable('parties', table => {
    table.increments();
    table.string('name', 128).notNullable();
    table
      .integer('host')
      .unsigned()
      .references('users.id')
      .onDelete('CASCADE');
    table.string('date').notNullable();
    table.string('time').notNullable();
    table.string('location').notNullable();
    table.string('image');
    table.string('description', 200000);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('parties');
};
