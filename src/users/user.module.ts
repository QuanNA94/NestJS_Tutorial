/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './user.service';

@Module({
    controllers: [UserController],

    // nơi cung cấp 
    // providers: [UserService]

    providers: [
        {
            provide: "USER_SERVICE_QUANNA",
            useClass: UserService
        }
    ]
})
export class UserModule { }

