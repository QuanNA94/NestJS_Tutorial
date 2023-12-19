/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './user.service';

@Module({
    controllers: [UserController],

    // nơi cung cấp 
    providers: [UserService]
})
export class UserModule { }

