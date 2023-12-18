/* eslint-disable prettier/prettier */

import { IsNotEmpty } from "class-validator"
export class UserDTO {
    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    password: string
}