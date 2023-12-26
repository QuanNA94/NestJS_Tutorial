/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { userTypeDto } from "./entities/user.entities";


@Injectable()
export class UsersService {

    private readonly users: userTypeDto[] = [
        {
            userId: 1,
            username: 'Anh Quan',
            password: 'KakaloseQ94'
        },
        {
            userId: 2,
            username: 'Hue',
            password: 'Superquan1312'
        }
    ];

    async findOne(username: string): Promise<userTypeDto | undefined> {
        return this.users.find(user => user.username === username);
    }
}