/* eslint-disable prettier/prettier */

// export type userTypeDto = {
//     userId: number;
//     username: string;
//     password: string; // Add this line
//     email: string;
//     phone: string;
// }


/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    email: string

    @Column()
    phone: string
}
