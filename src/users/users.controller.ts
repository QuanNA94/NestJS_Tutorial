/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, ParseIntPipe, } from "@nestjs/common";
import { UserDto } from "src/user.dto";
import { UserService } from "./user.service";
// import { UserRepository } from "./user.repository";


@Controller("users")
export class UserController {

    // userService: UserService

    // create Instance to use UserService
    constructor(private readonly userService: UserService) {
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

        return this.userService.createUser(user)
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        console.log(id)
        return "test"
    }
}