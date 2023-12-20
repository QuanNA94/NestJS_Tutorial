/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { StoreService } from "./store.service";

@Module({

    // nó providers ra bao nhiêu thằng cũng được, 
    // nhưng nếu nó export ra 1 thằng thì nó chỉ có thể sử dụng thằng đó mà thôi
    providers: [StoreService],

    // để cho thằng khác nó sử dụng phải export nó ra
    exports: [StoreService]
})
export class StoreModule {

}