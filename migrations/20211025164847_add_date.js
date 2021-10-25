exports.up = function (knex) {
  return knex.schema.table('vehicles', function (table) {
    table.dateTime('CreatedAt').nullable();
    table.dateTime('UpdatedAt').nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.table('vehicles', function (t) {
    t.dropColumn('CreatedAt');
    t.dropColumn('UpdatedAt');
  });
};
