/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './user.service';
import { UsersMockService } from './users-mock.service';



@Module({
    controllers: [UserController],

    // nơi cung cấp 
    // providers: [UserService]

    providers: [
        // Sử dụng useClass để NestJS tự động tạo instance của UsersMockService
        {
            provide: UserService,
            useClass: UsersMockService
        },
    ]
})
export class UserModule { }

