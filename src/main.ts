/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe())
    const PORT = 8080;
    app.listen(PORT, () => {
        console.log(`app start with port: ${PORT}`);
    });
}

bootstrap();
