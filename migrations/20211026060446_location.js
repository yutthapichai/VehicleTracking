exports.up = function (knex) {
  return knex.schema.createTable('locations', function (table) {
    table.increments('id').unsigned().primary();
    table.integer('VehicleID').notNullable();
    table.string('Latitude', 255).notNullable();
    table.string('Longitude', 255).notNullable();
    table.dateTime('CurrentDate').nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('locations');
};
