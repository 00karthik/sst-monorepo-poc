import { HttpApi } from '@aws-cdk/aws-apigatewayv2';
import * as sst from '@serverless-stack/resources';

export default class CoreStack extends sst.Stack {
  readonly httpApi: HttpApi;

  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    // Create a HTTP API
    const api = new sst.Api(this, 'Api');
    this.httpApi = api.httpApi;

    // Show the endpoint in the output
    this.addOutputs({
      ApiEndpoint: api.url,
    });
  }
}
