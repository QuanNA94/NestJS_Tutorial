/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";

// luu data user
// export class StoreService { 
//     save(data: any): void {
//         console.log("data", data)
//     }
// }


@Injectable()
export class StoreService {
    save(data : any) : void {
        console.log("data", data)
    }
}