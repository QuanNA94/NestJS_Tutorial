/* eslint-disable prettier/prettier */

import { IsString } from "class-validator";

export class loginDto{



    @IsString()
    password: string; // Add this line

    @IsString()
    email: string;


}