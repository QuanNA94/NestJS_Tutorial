/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { userTypeDto } from "./users.dto/users.dto";
import { PostgresService } from "src/module/postgres.module";
import { User } from "src/auth/entities/user.entities";


@Injectable()
export class UsersService {

    constructor(
        private readonly postgresService: PostgresService

    ) {

        // console.log(bcrypt.hashSync("superquan1312@gmail.com", 10));

    }

    private readonly users: userTypeDto[] = [
        {
            userId: 1,
            username: 'Anh Quan',
            password: bcrypt.hashSync('KakaloseQ', 10),
            email: "superquan1312@gmail.com",
            phone: "0966623248"
        },
        {
            userId: 2,
            username: 'Hue',
            password: 'Superquan1312',
            email: "kakalose94@gmail.com",
            phone: "0463653348"
        }
    ];

    // findOne: tìm kiếm đối tượng người dùng User dựa trên tên người dùng username
    async findOne(username: string): Promise<User | undefined> {
        // return this.users.find(user => user.email === username);

        return this.postgresService.user.findOne({
            where: {
                email: username
            }
        })
    }
    // async findOneWithPassword(username: string): Promise<userTypeDto | undefined> {
    //     return this.users.find(user => user.username === username);
    // }

}