/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from "@nestjs/common";


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
    createUser() {
        return {
            id: 1,
            name: "what the hell is going on ?",
            age: 33333
        }
    }
}