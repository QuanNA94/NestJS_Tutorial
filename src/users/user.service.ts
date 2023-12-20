/* eslint-disable prettier/prettier */

import { Inject, Injectable } from "@nestjs/common";
// import { StoreConfig } from "src/store/store.config";
// import { plainToInstance } from "class-transformer";
import { UserDto } from "src/user.dto";
import { StoreService } from "../store/store.service";
// import { UserRepository } from "./user.repository";


@Injectable()
export class UserService {
    // constructor(@Inject('APP_FB') appFacebook: any,) {
    constructor(
        // @Inject('STORE_CONFIG') storeConfig: StoreConfig,
        // @Inject('STORE_SERVICE') private storeService: StoreService,
        private storeService: StoreService
    ) {

        // console.log(storeConfig);
    }
    // constructor(userRepository: UserRepository) { }

    // createUser(user: UserDto): UserDto {
    //     user.createAt = new Date();
    //     user.id = 1;
    //     user.updateAt = new Date()
    //     return UserDto.plainToInstance(user)
    // }

    create(user: UserDto): UserDto {
        // return plainToInstance(UserDto, user)

        // trước khi return về gửi dữ liệu lên save coi nó work chưa
        this.storeService.save(user)

        // todo something insert to database
        return user;
    }
}
