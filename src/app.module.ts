/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UserModule } from "./user/users.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { RequestService } from "./utils/request.service";
import { AuthenticationMiddleware } from "./middleware/authentication.middleware";



@Module({
    imports: [UserModule],
    controllers: [AppController],
    providers: [AppService, RequestService]
})


// Applying middleware
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {

        consumer.apply(AuthenticationMiddleware).forRoutes('*');

    }
}