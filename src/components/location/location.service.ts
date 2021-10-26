import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { CreateLocationDto } from './model/location.dto';
import { CreateLocationState } from './model/location.interface';

@Injectable()
export class LocationService {
  constructor(@InjectModel() private readonly knex: Knex) {}

  async findAll(query) {
    const pageSize = +query.pagesize || 10;
    const currentPage = +query.page || 1;
    const message = query.message || 'undefined';

    let count = (await this.knex('locations').count('id'))[0].count;
    const locations = this.knex.table('locations');

    if (message !== 'undefined') {
      locations.whereRaw(`LOWER(VehicleName) LIKE ?`, [`%${message}%`]);
      count = (await locations).length;
    }

    locations
      .orderBy('CurrentDate', 'desc')
      .limit(pageSize)
      .offset(pageSize * (currentPage - 1));

    return { countData: count, vehicles: await locations };
  }

  async findOne(id: number) {
    const vehicles = await this.knex
      .select()
      .from('locations')
      .innerJoin('vehicles', 'vehicles.id', 'locations.VehicleID')
      .where('VehicleID', id)
      .orderBy('CurrentDate', 'desc')
      .limit(1);
    // console.log(vehicles);
    return vehicles[0];
  }

  async create(data: CreateLocationDto) {
    const dataCreate: CreateLocationState = {
      VehicleID: data.VehicleID,
      Latitude: data.Latitude,
      Longitude: data.Longitude,
      CurrentDate: new Date(),
    };

    const vehicles = await this.knex.table('locations').insert(dataCreate);
    return { vehicles };
  }
}
