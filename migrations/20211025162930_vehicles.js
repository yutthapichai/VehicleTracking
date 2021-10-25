exports.up = function (knex) {
  return knex.schema.createTable('vehicles', function (table) {
    table.increments('id');
    table.string('VehicleName', 255).notNullable();
    table.string('VehicleType', 255).notNullable();
    table.string('TextColor', 255).notNullable();
    table.string('BackgroundColor', 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('vehicles');
};
