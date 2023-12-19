/* eslint-disable prettier/prettier */

import { Expose, Transform } from "class-transformer"
import { IsNotEmpty, Length } from "class-validator"
import { BaseDto } from "./common/base.dto"


export class UserDto extends BaseDto {

    // class validator
    @IsNotEmpty()
    @Expose()
    username: string

    firstName: string

    lastName: string

    @Expose()
    @Transform(({ obj }) => obj.firstName + '' + obj.lastName)
    fullName: string

    @IsNotEmpty()
    @Length(10, 20)
    @Expose()
    password: string
}