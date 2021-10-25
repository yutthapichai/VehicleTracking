exports.up = function (knex) {
  return knex.schema.table('vehicles', function (t) {
    t.index(['VehicleName']);
  });
};

exports.down = function (knex) {
  return knex.schema.table('vehicles', function (t) {
    t.dropIndex(['VehicleName']);
  });
};
