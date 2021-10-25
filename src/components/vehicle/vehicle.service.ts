import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from 'nest-knexjs';
import { Knex } from 'knex';
import { CreateVehibleState } from './model/vehicle.interface';
import { PartialType } from '@nestjs/mapped-types';
import { CreateVehibleDto } from './model/vehicle.dto';

export class UpdateVehibleDto extends PartialType(CreateVehibleDto) {}

@Injectable()
export class VehicleService {
  constructor(@InjectModel() private readonly knex: Knex) {}

  async findAll(query) {
    const pageSize = +query.pagesize || 10;
    const currentPage = +query.page || 1;
    const message = query.message || 'undefined';

    let count = (await this.knex('vehicles').count('id'))[0].count;
    const vehicles = this.knex.table('vehicles');

    if (message !== 'undefined') {
      vehicles.whereRaw(`LOWER(VehicleName) LIKE ?`, [`%${message}%`]);
      count = (await vehicles).length;
    }

    vehicles
      .orderBy('id', 'asc')
      .limit(pageSize)
      .offset(pageSize * (currentPage - 1));

    return { countData: count, vehicles: await vehicles };
  }

  async create(createUserDto: CreateVehibleDto) {
    const dataCreate: CreateVehibleState = {
      VehicleName: createUserDto.VehicleName,
      VehicleType: createUserDto.VehicleType,
      TextColor: createUserDto.TextColor,
      BackgroundColor: createUserDto.BackgroundColor,
      CreatedAt: new Date(),
      UpdatedAt: new Date(),
    };

    const result = await this.knex
      .table('vehicles')
      .where('VehicleName', createUserDto.VehicleName);

    if (!result.length) {
      const vehicles = await this.knex.table('vehicles').insert(dataCreate);
      return { vehicles };
    } else {
      return 'Vehicle name is exist';
    }
  }

  async findOne(id: number) {
    if (!id) {
      throw new NotFoundException(`Vehicle ${id} does not exist`);
    }
    const vehicles = await this.knex.table('vehicles').where('id', id);
    // console.table(vehicles);
    return { vehicles };
  }

  async update(id: number, data: UpdateVehibleDto) {
    const dataUpdate: CreateVehibleState = {
      VehicleName: data.VehicleName,
      VehicleType: data.VehicleType,
      TextColor: data.TextColor,
      BackgroundColor: data.BackgroundColor,
      UpdatedAt: new Date(),
    };

    const vehicles = await this.knex
      .table('vehicles')
      .where('id', id)
      .update(dataUpdate);

    return { vehicles };
  }

  async remove(id: number) {
    if (!id) {
      throw new NotFoundException(`Vehicle ${id} does not exist`);
    }
    const vehicles = await this.knex.table('vehicles').where('id', id).del();
    return { vehicles };
  }
}
