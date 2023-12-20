/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UserModule } from "./users/user.module";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        UserModule,
        ConfigModule.forRoot(
            {
                // Cấu hình các tùy chọn cho việc đọc cấu hình, ví dụ: từ tập tin .env
                isGlobal: true,
            }
        )
    ],
    providers: []
})
export class AppModule { }