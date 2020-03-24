
// eslint-disable-next-line arrow-body-style
exports.up = (knex) => {
  return knex.schema.createTable('users', (t) => {
    t.increments('id').primary();
    t.string('nome').notNull();
    t.string('email').notNull().unique();
    t.string('password').notNull();
  });
};

// eslint-disable-next-line arrow-body-style
exports.down = (knex) => {
  return knex.schema.dropTable();
};
