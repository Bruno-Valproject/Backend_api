import express from 'express';
import router from './router';

//Logger
import morgan from 'morgan';

//Documentation
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from '../../swagger.json';

export const createServer = async () => {
  //Creating a simple express server
  const server = express();

  //Using json as http response & request object
  server.use(express.json());

  //Initializing a small logger
  server.use(morgan('tiny'));

  //Initializing our router
  router(server);

  //Initializing our documentation
  server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));

  return server;
};