/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, ParseIntPipe, } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { UserDto } from "src/user.dto";
import { UserService } from "./user.service";
// import { UserRepository } from "./user.repository";


@Controller("users")
export class UserController {

    // userService: UserService

    // create Instance to use UserService
    constructor(private moduleRef: ModuleRef) {
        // const userRepository = new UserRepository
        // this.userService = new UserService(userRepository) // query to db
    }

    @Get()
    getUser() {
        return [
            {
                id: 1,
                name: "quan",
                age: 30
            },
            {
                id: 2,
                name: "hoi",
                age: 28
            }
        ]
    }

    @Post()
    createUser(@Body() user: UserDto): UserDto {

        const userService = this.moduleRef.get(UserService)

        // const userReal = plainToClass(UserDto, user, { excludeExtraneousValues: true })
        // return userReal

        // return this.userService.createUser(user)

        return userService.createUser(user)
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        console.log(id)
        return "test"
    }
}