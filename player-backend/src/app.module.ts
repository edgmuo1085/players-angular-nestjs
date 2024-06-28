import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [PlayersModule, NotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
