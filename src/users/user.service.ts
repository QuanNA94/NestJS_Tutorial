/* eslint-disable prettier/prettier */

import { UserDto } from "src/user.dto";
import { UserRepository } from "./user.repository";


export class UserService {

    constructor(userRepository: UserRepository) { }


    createUser(user: UserDto): UserDto {
        user.createAt = new Date();
        user.id = 1;
        user.updateAt = new Date()
        return UserDto.plainToInstance(user)

    }
}