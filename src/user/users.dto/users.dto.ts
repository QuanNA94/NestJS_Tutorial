import { IsNumber, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export type userTypeDto = {
    userId: number;
    username: string;
    password: string; // Add this line
    email: string;
    phone: string;
}

export class createUserDto {

    @IsString()
    username: string;

    @IsString()
    password: string; // Add this line

    @IsString()
    email: string;
    
    @IsString()
    phone: string;
}