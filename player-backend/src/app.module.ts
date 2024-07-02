import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ccpa7stkruda3o.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com',
      port: 5432,
      password:
        'p8d7ce2a3627eb79abc22be87e3b2124ffb21d346cc223b4d8f750687842bd2f9',
      username: 'ue9dlc8pc0d7s3',
      entities: [],
      database: 'dd2govv6eicnbv',
      synchronize: true,
      logging: true,
    }),
    PlayersModule,
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
