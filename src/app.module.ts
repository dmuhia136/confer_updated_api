import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PreauthMiddleware } from './middlewares/preauth.middleware';
import { AuthModule, RoomModule, UserModule } from './modules';
import { TransactionModule } from './modules/transaction.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
      dbName: 'confer',
    }),
    UserModule,
    RoomModule,
    TransactionModule
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PreauthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
