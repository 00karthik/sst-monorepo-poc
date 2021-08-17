import routes from './routes';
import { HttpApi } from '@aws-cdk/aws-apigatewayv2';
import * as sst from '@serverless-stack/resources';

interface TripStackProps extends sst.StackProps {
  httpApiId: string;
}

export default class TripStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props: TripStackProps) {
    super(scope, id, props);
    const { httpApiId } = props;

    new sst.Api(this, 'TripApi', {
      httpApi: HttpApi.fromHttpApiAttributes(this, 'Api', {
        httpApiId,
      }),
      defaultFunctionProps: {
        srcPath: 'services/trip',
      },
      routes: {
        [`ANY ${routes.TRIP_ROUTE_PREFIX}/{proxy+}`]: 'src/lambda.handler',
      },
    });
  }
}
