import { IsNotEmpty, IsString } from 'class-validator';
import { CreateVehibleState } from './vehicle.interface';

export class CreateVehibleDto implements CreateVehibleState {
  @IsNotEmpty()
  @IsString()
  VehicleName: string;
  @IsNotEmpty()
  @IsString()
  VehicleType: string;
  @IsNotEmpty()
  @IsString()
  TextColor: string;
  @IsNotEmpty()
  @IsString()
  BackgroundColor: string;
}
