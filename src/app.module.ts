/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UserModule } from "./users/user.module";
import { UserService } from "./users/user.service";


@Module({
    imports: [UserModule],
    providers: [
        {
            provide: 'APP_USER',
            useClass: UserService,
        }
    ]
})
export class AppModule { }