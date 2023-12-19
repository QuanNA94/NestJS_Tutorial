/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, ParseIntPipe, } from "@nestjs/common";
import { UserDto } from "src/user.dto";


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

    @Post()
    createUser(@Body() user: UserDto): UserDto {
        user.createAt = new Date();
        user.id = 1;
        user.updateAt = new Date()
        // const userReal = plainToClass(UserDto, user, { excludeExtraneousValues: true })
        // return userReal

        return UserDto.plainToInstance(user)

    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        console.log(id)
        return "test"
    }
}