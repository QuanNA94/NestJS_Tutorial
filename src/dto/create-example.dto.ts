/* eslint-disable prettier/prettier */
import { IsString, IsInt } from 'class-validator';

export class CreateExampleDto {
    @IsString()
    name: string;

    @IsInt()
    userId: number;
}