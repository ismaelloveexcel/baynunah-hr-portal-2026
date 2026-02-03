import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log('HTTP trigger function processed a ping request.');

  const responseMessage = {
    status: 'ok',
    message: 'Pong! API is running.',
    timestamp: new Date().toISOString(),
    service: 'Baynunah HR Portal API',
    version: '1.0.0'
  };

  context.res = {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: responseMessage
  };
};

export default httpTrigger;
