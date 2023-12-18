/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, ParseIntPipe, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserDTO } from "src/user.dto";


@Controller("users")
export class UserController {
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

    @UsePipes(new ValidationPipe)
    @Post()
    createUser(@Body() user: UserDTO): UserDTO {

        console.log(user)
        return {
            username: "test",
            password: "test"
        }
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        console.log(id)
        return "test"
    }
}