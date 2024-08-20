import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { config } from 'dotenv';

config()


@Module({
  imports: [UsersModule,TypeOrmModule.forRoot({
    type:'mysql',
    host:`${process.env.HOST}`,
    username:`${process.env.USERNAME}`,
    database:`${process.env.DATABASE_NAME}`,
    password:`${process.env.PASSWORD_DATABASE}`,
    entities:[],
    synchronize:true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
