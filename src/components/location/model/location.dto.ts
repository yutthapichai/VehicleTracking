import { IsNotEmpty, IsString } from 'class-validator';
import { CreateLocationState } from './location.interface';

export class CreateLocationDto implements CreateLocationState {
  @IsNotEmpty()
  @IsString()
  VehicleID: string;
  @IsNotEmpty()
  @IsString()
  Latitude: string;
  @IsNotEmpty()
  @IsString()
  Longitude: string;
}
