/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './user.service';
// import { UsersMockService } from './users-mock.service';
import { StoreService } from '../store/store.service';
import { StoreConfig } from 'src/store/store.config';
import { StoreModule } from 'src/store/store.module';


// function createStore(config: StoreConfig): StoreService {
//     console.log("config", config)
//     return new StoreService
// }

// const configFacebook = {
//     appId: 'facebook001',
//     appSecret: 'facebook001'
// }


@Module({
    imports: [StoreModule],
    controllers: [UserController],

    // nơi cung cấp 
    // providers: [UserService]

    providers: [
        UserService,

        // Sử dụng useClass để NestJS tự động tạo instance của UsersMockService
        // {
        //     provide: UserService,
        //     useClass: UsersMockService
        // },
        // {
        //     provide: 'APP_FB',
        //     useValue: configFacebook,
        // },
        // {
        //     provide: "STORE_CONFIG",
        //     useValue: {
        //         dir: 'store',
        //         path: 'user'
        //     } as StoreConfig
        // },
        // {
        //     provide: 'STORE_SERVICE',
        //     useFactory: createStore,

        //     // truyền tham số vào func createStore
        //     inject: [
        //         {
        //             token: "STORE_CONFIG",
        //             optional: true
        //         }
        //     ]

        // }
    ]
})
export class UserModule { }

