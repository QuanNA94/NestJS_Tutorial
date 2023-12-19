/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UserDto } from "src/user.dto";


@Injectable()
export class UsersMockService {
    create(user: UserDto): UserDto {
        return user
    }

}