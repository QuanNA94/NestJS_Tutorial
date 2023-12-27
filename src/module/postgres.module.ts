/* eslint-disable prettier/prettier */
import { Global, Injectable, Module } from "@nestjs/common";

import { InjectRepository, TypeOrmModule } from "@nestjs/typeorm";
// import { join } from "path";
import { User } from "src/auth/entities/user.entities";
import { Repository } from "typeorm";


@Injectable()
export class PostgresService {
    constructor(

        // bạn muốn inject một instance của Repository<User> vào UserRepository
        // Điều này giúp bạn dễ dàng thao tác với cơ sở dữ liệu liên quan đến đối tượng User trong service của bạn 
        // mà không cần phải tạo instance của repository một cách rõ ràng.
        @InjectRepository(User)
        private UserRepository: Repository<User>,
    ) { }

    get user() {
        return this.UserRepository // thực hiện các thao tác với database liên quan đến đối tượng User
    }

}


@Global()
@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
    ],
    providers: [PostgresService],
    exports: [PostgresService]
})
export class PostgresModule { }



