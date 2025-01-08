import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger(bootstrap.name);
  const app = await NestFactory.create(AppModule);
  const config_service = app.get(ConfigService);
  // const database_env = config_service.get<DatabaseConfig>('database')
  logger.debug(config_service.get('NODE_ENV'));
  logger.debug(config_service.get('PORT'));

  await app.listen(config_service.get('PORT'), () =>
    logger.log(`Application running on port: ${config_service.get('PORT')}`),
  );
}
bootstrap();
