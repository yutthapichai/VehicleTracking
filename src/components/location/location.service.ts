import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { CreateLocationDto } from './model/location.dto';
import { CreateLocationState } from './model/location.interface';

@Injectable()
export class LocationService {
  constructor(@InjectModel() private readonly knex: Knex) {}

  async findOne(id: number) {
    const vehicles = await this.knex.table('vehicles').where('id', id);
    return { vehicles };
  }

  async create(createUserDto: CreateLocationDto) {
    const dataCreate: CreateLocationState = {
      VehicleID: createUserDto.VehicleID,
      Latitude: createUserDto.Latitude,
      Longitude: createUserDto.Longitude,
      Date: new Date(),
    };

    const vehicles = await this.knex.table('vehicles').insert(dataCreate);
    return { vehicles };
  }
}
