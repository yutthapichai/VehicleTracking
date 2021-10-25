import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVehibleDto {
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

export class UpdateVehibleDto {
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
