http://localhost:3400/api/parties/1/attendeesexports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table
      .string('username', 128)
      .notNullable()
      .unique();
    table
      .string('email')
      .notNullable()
      .unique();
    table.string('password').notNullable();
    table.string('img_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
