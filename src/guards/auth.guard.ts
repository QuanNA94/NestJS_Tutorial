/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

// CanActivate: Interface từ @nestjs/common được triển khai bởi các guards để xác định liệu một request có được phép tiếp tục hay không.
import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { Observable } from 'rxjs'; // RxJS là một thư viện hỗ trợ lập trình bất đồng bộ trong JavaScript/TypeScript.
import { RequestService } from 'src/utils/request.service';

@Injectable()
export class AuthGuard implements CanActivate {
    private readonly logger = new Logger(AuthGuard.name);

    constructor(private readonly requestService: RequestService) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log('User ID:', this.requestService.getUserId());
        if (this.requestService.getUserId() === '1') {
            this.logger.log('You are admin. You can continue.');
            return true;
        } else {
            this.logger.log('You are not admin. Access denied');
            return false;
        }
    }
}