/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from "@nestjs/common";
import { UserDto } from "src/user.dto";
import { UserService } from "./user.service";
import { plainToInstance } from "class-transformer";
// import { UsersMockService } from "./users-mock.service";
// import { ModuleRef } from "@nestjs/core";
// import { UserRepository } from "./user.repository";


@Controller("users")
export class UserController {

    // create Instance to use UserService
    constructor(private readonly userService: UserService) { }

    @Post()
    createUser(@Body() user: UserDto): UserDto {

        // return this.moduleref.get('USER_SERVICE_QUANNA').createUser(user);
        console.log("user", user)
        // return this.userService.create(user)
        return plainToInstance(UserDto, this.userService.create(user))
    }
}