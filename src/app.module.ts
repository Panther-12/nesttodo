/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://nimrodnyongesa7:8zynYju4K0tjR75J@cluster0.ven6ihh.mongodb.net/?retryWrites=true&w=majority',{dbName: 'postsDB'}), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
