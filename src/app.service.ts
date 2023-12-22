/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postExample() {
    // Thực hiện công việc của phương thức postExample ở đây
  }
}
