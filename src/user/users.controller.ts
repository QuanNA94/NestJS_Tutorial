/* eslint-disable prettier/prettier */

import { Controller, Get, Post, Body, Param, ParseIntPipe, UsePipes, ValidationPipe } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { UserDto } from "src/user.dto";



// trigger logic
@Controller("users")
export class UserController {


    @Get()
    getUser() {
        return [
            {
                id: 1,
                name: 'Anh Quan',
                age: 30,
            },
            {
                id: 2,
                name: 'Long Em',
                age: 20,
            },
            {
                id: 3,
                name: 'A Thong',
                age: 40,
            },

        ]
    }

    @UsePipes(new ValidationPipe)
    @Post()
    createUser(@Body() user: UserDto): UserDto {
        // fake để trả về
        user.createAt = new Date()
        user.id = 1;
        user.updateAt = new Date()

        // console.log(user)

        // const userReal = plainToClass(UserDto, user, { excludeExtraneousValues: true }) // remove field doesn't alias @Expose
        // return userReal

        return UserDto.plainToClass(user)
    }

    @Get(":id")
    getUserById(@Param('id', ParseIntPipe) id: number) {
        console.log(id)
        return "test"
    }



}