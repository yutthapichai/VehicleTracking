import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehibleDto } from './model/vehicle.dto';
import { PartialType } from '@nestjs/mapped-types';
import { InjectModel } from 'nest-knexjs';
import { Knex } from 'knex';

export class UpdateUserDto extends PartialType(CreateVehibleDto) {}

@Injectable()
export class VehicleService {
  constructor(@InjectModel() private readonly knex: Knex) {}

  async findAll() {
    const vehicles = await this.knex.table('vehicle');
    return { vehicles };
  }

  async create(createUserDto: CreateVehibleDto) {
    const vehicles = await this.knex.table('vehicle').insert({
      name: createUserDto.name,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return { vehicles };
  }

  async findOne(id: number) {
    if (!id) {
      throw new NotFoundException(`Vehicle ${id} does not exist`);
    }
    const vehicles = await this.knex.table('vehicle').where('id', id);
    return { vehicles };
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const vehicles = await this.knex.table('vehicle').where('id', id).update({
      name: updateUserDto.name,
    });

    return { vehicles };
  }

  async remove(id: number) {
    if (!id) {
      throw new NotFoundException(`Vehicle ${id} does not exist`);
    }
    const vehicles = await this.knex.table('vehicle').where('id', id).del();
    return { vehicles };
  }
}
