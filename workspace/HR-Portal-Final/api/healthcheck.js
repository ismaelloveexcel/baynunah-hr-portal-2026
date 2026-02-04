const { app } = require('@azure/functions');

app.http('healthcheck', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    context.log('Healthcheck endpoint called');
    
    return {
      status: 200,
      jsonBody: {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        service: 'HR Portal API',
        version: '1.0.0'
      }
    };
  }
});
