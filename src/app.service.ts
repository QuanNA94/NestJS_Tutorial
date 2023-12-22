/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log("Appservice] -- userId : 12")
    return 'Hello World!';
  }

  postExample() {
    // Thực hiện công việc của phương thức postExample ở đây
  }
}
