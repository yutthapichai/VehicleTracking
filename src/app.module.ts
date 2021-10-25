import { Module } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleModule } from './components/vehicle/vehicle.module';
import { LocationModule } from './components/location/location.module';
import { LocationModule } from './components/location/location.module';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'mysql2',
        version: '8.0.15',
        useNullAsDefault: true,
        connection: {
          host: '127.0.0.1',
          user: 'root',
          password: 'qwerty26',
          database: 'tracking',
        },
      },
    }),
    VehicleModule,
    LocationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
