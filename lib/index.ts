
import CoreStack from './CoreStack';
import TripStack from './TripStack';
import * as sst from '@serverless-stack/resources';

export default function main(app: sst.App): void {
  app.setDefaultFunctionProps({
    bundle: {
      externalModules: [
        '@nestjs/microservices',
        'cache-manager',
        'class-transformer',
        'class-validator',
        '@nestjs/websockets/socket-module',
      ],
    },
  });

  const { httpApi } = new CoreStack(app, 'core');



  new TripStack(app, 'trip', {
    httpApiId: httpApi.apiId,
  });
}
