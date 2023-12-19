/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";

// Decorator @Module của NestJS định nghĩa một module.
@Module(
    {
        controllers: [UserController] // Thêm controller UserController vào module
    }
)

// Class UserModule đại diện cho module User
export class UserModule { }
