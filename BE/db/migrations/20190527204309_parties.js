exports.up = function(knex, Promise) {
  return knex.schema.createTable('parties', table => {
    table.increments();
    table.string('name', 128).notNullable();
    table.integer('host').unsigned().references('users.id').onDelete('CASCADE');
    table.string('date').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.scema.dropTableIfExists('parties');
};
