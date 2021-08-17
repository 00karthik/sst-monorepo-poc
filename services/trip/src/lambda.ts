import { NestFactory } from '@nestjs/core';
import { APIGatewayProxyEventV2, APIGatewayProxyHandlerV2, Callback, Context, Handler } from 'aws-lambda';

import { AppModule } from './app/app.module';
import { Logger } from '@packages/common';
import serverlessExpress from '@vendia/serverless-express';

let server: Handler;

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: APIGatewayProxyHandlerV2 = async (
  event: APIGatewayProxyEventV2,
  context: Context,
  callback: Callback
) => {
  Logger.config = {
    lambdaRequestId: context.awsRequestId,
    serviceName: 'trip-service',
  };
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
