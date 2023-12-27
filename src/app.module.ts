/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";

import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core";
import { NormalizeResponse } from "./logging/logging.interceptor";
import { HttpExceptionFilter } from "./http-exception.filter";
// import { TypeOrmModule } from "@nestjs/typeorm";
// import { join } from "path";
import { PostgresModule } from "./module/postgres.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./auth/entities/user.entities";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'quanna',
            password: '123',
            database: 'postgres',
            entities: [User],
            synchronize: true,
        }),
        PostgresModule,
        ConfigModule.forRoot({
            isGlobal: true
        }), AuthModule],
    controllers: [AppController],
    providers: [AppService, {
        provide: APP_INTERCEPTOR,
        useClass: NormalizeResponse
    },
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter
        }


    ],
})
export class AppModule { }