import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule, UserModule } from './modules';

@Module({
  imports: [AuthModule,MongooseModule.forRoot('mongodb://localhost:27017/confer'),UserModule],
})
export class AppModule {}
