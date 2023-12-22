/* eslint-disable prettier/prettier */
import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { RequestService } from 'src/utils/request.service';



@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
    // Tạo một đối tượng logger để ghi log. Điều này giúp theo dõi và gỡ lỗi trong quá trình xử lý middleware.
    private readonly logger = new Logger(AuthenticationMiddleware.name);
    constructor(private readonly requestService: RequestService) { }
    use(req: Request, res: Response, next: NextFunction) {
        this.logger.log(AuthenticationMiddleware.name);
        // Authenticate the request
        // middleware đang giả sử rằng nó đã xác thực request thành công và đặt giá trị userId vào RequestService
        const userId = '123';
        this.requestService.setUserId(userId);

        next();
    }
}