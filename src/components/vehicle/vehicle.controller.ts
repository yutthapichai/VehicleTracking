import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CreateVehibleDto } from './model/vehicle.dto';
import { VehicleService } from './vehicle.service';
import { PartialType } from '@nestjs/mapped-types';
import { AuthBasicGuard } from 'src/guard/auth.guard';

export class UpdateVehibleDto extends PartialType(CreateVehibleDto) {}

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  @UseGuards(AuthBasicGuard)
  create(@Body() createUserDto: CreateVehibleDto) {
    try {
      return this.vehicleService.create(createUserDto);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  @UseGuards(AuthBasicGuard)
  findAll(@Query() query) {
    return this.vehicleService.findAll(query);
  }

  @Get(':id')
  @UseGuards(AuthBasicGuard)
  findOne(@Param('id') id: string) {
    return this.vehicleService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(AuthBasicGuard)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateVehibleDto) {
    try {
      return this.vehicleService.update(+id, updateUserDto);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.vehicleService.remove(+id);
  // }
}
