/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
// import { ConfigService } from ""
import { UserModule } from "./users/user.module";
import { UserService } from "./users/user.service";
import { ConfigModule } from "@nestjs/config";
import { StoreConfig } from "./store/store.config";
// import { AppService } from "./app.service";




const configFacebook = {
    appId: 'facebook001',
    appSecret: 'facebook001'
}

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
    providers: [
        // {
        //     provide: ConfigService,
        //     useClass:
        //         process.env.NODE_ENV === 'development'
        //             ? DevelopmentConfigService
        //             : ProductionConfigService,
        // }
        // ,
        {
            provide: 'APP_USER',
            useClass: UserService,
        },
        {
            provide: 'APP_FB',
            useValue: configFacebook,
        },
        {
            provide: 'STORE_CONFIG',
            useValue: {
                dir: 'store',
                path: 'user'
            } as StoreConfig
        }
    ]
})
export class AppModule { }