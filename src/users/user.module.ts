/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './user.service';
// import { UsersMockService } from './users-mock.service';
import { StoreService } from './store.service';
import { StoreConfig } from 'src/store/store.config';


function createStore(config: StoreConfig): StoreService {
    console.log("config" , config)
    return new StoreService
}

const configFacebook = {
    appId: 'facebook001',
    appSecret: 'facebook001'
}


@Module({
    controllers: [UserController],

    // nơi cung cấp 
    // providers: [UserService]

    providers: [
        // Sử dụng useClass để NestJS tự động tạo instance của UsersMockService
        // {
        //     provide: UserService,
        //     useClass: UsersMockService
        // },
        {
            provide: 'APP_FB',
            useValue: configFacebook,
        },
        {
            provide: "STORE_CONFIG",
            useValue: {
                dir: 'store',
                path: 'user'
            } as StoreConfig
        },
        {
            provide: 'STORE_SERVICE',
            useFactory: createStore,

            // truyền tham số vào func createStore
            inject: [
                {
                    token: "STORE_CONFIG",
                    optional: true
                }
            ]

        },
        UserService
    ]
})
export class UserModule { }

