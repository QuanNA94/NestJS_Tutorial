/* eslint-disable prettier/prettier */

import { Inject, Injectable } from "@nestjs/common";
import { StoreConfig } from "./store.module";
import * as fs from 'fs'

// luu data user
// export class StoreService { 
//     save(data: any): void {
//         console.log("data", data)
//     }
// }


@Injectable()
export class StoreService {

    constructor(@Inject('STORE_CONFIG') private readonly storeConfig: StoreConfig) {
        if(!fs.existsSync(this.storeConfig.dirname)) {
            fs.mkdirSync(this.storeConfig.dirname)
        }
    }

    save(data: any): void {
        console.log("data", data)
    }
}