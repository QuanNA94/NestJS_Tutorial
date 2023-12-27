/* eslint-disable prettier/prettier */
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";
import { Response } from "express";

@Injectable()
export class NormalizeResponse implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        console.log('Before...');

        const contextHTTP = context.switchToHttp()

        const res = contextHTTP.getResponse<Response>()

        return next.handle().pipe(map(content => ({ content, status: res.statusCode })));


    }
}

