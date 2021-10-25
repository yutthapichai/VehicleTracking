exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('vehicles')
    .del()
    .then(function () {
      // Inserts seed entries
      const vehicles = [];
      for (let i = 0; i < 100; i++) {
        vehicles.push({
          id: i + 1,
          ...dataTest[randomNum(0, 9)],
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        });
      }
      // console.log(vehicles);
      return knex('vehicles').insert(vehicles);
    });
};

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const dataTest = [
  {
    VehicleName: 'mj 75436',
    VehicleType: 'Inter-province taxis',
    TextColor: 'Black',
    BackgroundColor: 'Yellow',
  },
  {
    VehicleName: 'fd 4584',
    VehicleType: 'Motorized tricycle taxis (tuk-tuks)',
    TextColor: 'Green',
    BackgroundColor: 'Yellow',
  },
  {
    VehicleName: 're 1992',
    VehicleType: 'Mini truck taxis (commonly known locally as "Subaru"s)',
    TextColor: 'Blue',
    BackgroundColor: 'Yellow',
  },
  {
    VehicleName: 'mj 75436',
    VehicleType: 'Inter-province taxis',
    TextColor: 'Black',
    BackgroundColor: 'Yellow',
  },
  {
    VehicleName: 'er 1992',
    VehicleType:
      'Business-, tourist- and rental-service vehicles (including airport and hotel taxis)',
    TextColor: 'Green (aquamarine)',
    BackgroundColor: 'White',
  },
  {
    VehicleName: 'kt 1063',
    VehicleType:
      'Private cars (not more than seven seats) and 4 door pick-up trucks',
    TextColor: 'White',
    BackgroundColor: 'Black',
  },
  {
    VehicleName: 'hng 8307',
    VehicleType: 'Private vans (more than seven seats)',
    TextColor: 'White',
    BackgroundColor: 'Blue',
  },
  {
    VehicleName: 'yu 2027',
    VehicleType: 'Private 2 door pick-up trucks',
    TextColor: 'White',
    BackgroundColor: 'Green',
  },
  {
    VehicleName: 'lk 287',
    VehicleType: 'Private motorized tricycles',
    TextColor: 'White',
    BackgroundColor: 'Red',
  },
  {
    VehicleName: 'rk 5',
    VehicleType:
      'Small trailers, road rollers, tractors and agricultural vehicles',
    TextColor: 'Orange',
    BackgroundColor: 'Black',
  },
];
