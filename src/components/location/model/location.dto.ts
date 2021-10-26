import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateLocationState } from './location.interface';

export class CreateLocationDto implements CreateLocationState {
  @IsNotEmpty()
  @IsNumber()
  VehicleID: number;
  @IsNotEmpty()
  @IsString()
  Latitude: string;
  @IsNotEmpty()
  @IsString()
  Longitude: string;
}
