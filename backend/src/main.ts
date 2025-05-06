  // I18nModule initialization

import { NestFactory } from '@nestjs/core';
import { I18nModule, AcceptLanguageResolver } from 'nestjs-i18n';
import * as path from 'path';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Internationalization configuration
  app.useGlobalPipes(); // ensure global pipes are active if needed

  // 安全中间件
  app.use(helmet());
  app.enableCors({
    origin: ['https://your-domain.com'], // 前端域白名单
    methods: ['GET','POST','PUT','DELETE'],
    credentials: true,
  });
  app.use(rateLimit({
    windowMs: 1 * 60 * 1000, // 1 分钟
    max: 100, // 每 IP 每分钟限 100 次请求
  }));

  // 全局验证管道
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // 自动剔除 DTO 中未声明的属性
    forbidNonWhitelisted: true, // 抛出异常
    transform: true, // 自动类型转换
  }));

  // Swagger 文档
  const config = new DocumentBuilder()
    .setTitle('天龙系统 API 文档')
    .setDescription('所有模块的 API 接口说明')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

}
bootstrap();
