import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  Render,
  UseGuards,
} from '@nestjs/common';
import { AuthBasicGuard } from 'src/guard/auth.guard';
import { LocationService } from './location.service';
import { CreateLocationDto } from './model/location.dto';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  @UseGuards(AuthBasicGuard)
  findAllLocations(@Query() query) {
    return this.locationService.findAll(query);
  }

  @Get(':id')
  @Render('index')
  @UseGuards(AuthBasicGuard)
  findLocation(@Param('id') id: string) {
    return this.locationService.findOne(+id);
  }

  @Post('/')
  @UseGuards(AuthBasicGuard)
  createLocation(@Body() createUserDto: CreateLocationDto) {
    try {
      return this.locationService.create(createUserDto);
    } catch (err) {
      // console.log(err, 'createLocation');
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
}
