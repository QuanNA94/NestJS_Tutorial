/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */


import {
    CallHandler,
    ExecutionContext,
    Injectable,
    Logger,
    NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { RequestService } from 'src/utils/request.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor { // LoggingInterceptor là một interceptor, và nó thực hiện interface NestInterceptor của NestJS.

    private readonly logger = new Logger(LoggingInterceptor.name);

    constructor(private readonly requestService: RequestService) { }

    // intercept: Phương thức này được gọi mỗi khi một request đi qua interceptor.
    intercept(
        context: ExecutionContext,
        next: CallHandler<any>,
    ): Observable<any> | Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest();
        const userAgent = request.get('user-agent') || '';
        const { ip, method, path: url } = request;
        this.logger.log(
            `${method} ${url} ${userAgent} ${ip}: ${context.getClass().name} ${context.getHandler().name
            } invoked...`,
        );

        this.logger.debug(`userId: ${this.requestService.getUserId()}`);

        const now = Date.now();

        return next.handle().pipe(
            tap((res) => {
                const response = context.switchToHttp().getResponse();
                const { statusCode } = response;
                const contentLength = response.get('content-length');

                //Sử dụng logger để ghi log về thông tin của request, bao gồm method, url, user-agent, ip, tên của class và tên của handler.
                this.logger.log(
                    `${method} ${url} ${statusCode} - ${userAgent} ${ip}: ${Date.now() - now
                    }ms`,
                );

                this.logger.debug(`Response:${res}`);
            }),
        );
    }
}