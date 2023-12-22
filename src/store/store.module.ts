/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { StoreService } from "./store.service";

export interface StoreConfig {
    dirname: string,
    filename: string
}

@Module({

    // nó providers ra bao nhiêu thằng cũng được, 
    // nhưng nếu nó export ra 1 thằng thì nó chỉ có thể sử dụng thằng đó mà thôi
    providers: [StoreService, {
        provide: "STORE_CONFIG",
        useValue: {
            dirname: 'store',
            filename: 'data.json' // change name
        } as StoreConfig
    }],



    // để cho thằng khác nó sử dụng phải export nó ra
    exports: [StoreService]
})
export class StoreModule {

}