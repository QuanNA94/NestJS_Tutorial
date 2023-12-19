/* eslint-disable prettier/prettier */

import { Expose, plainToInstance } from "class-transformer";


export abstract class BaseDto {
    @Expose()
    id: number;

    @Expose()
    createAt: Date;

    @Expose()
    updateAt: Date;

    static plainToInstance<T>(this: new (...args: any[]) => T, obj: T): T {
        return plainToInstance(this, obj, { excludeExtraneousValues: true })
    }
}