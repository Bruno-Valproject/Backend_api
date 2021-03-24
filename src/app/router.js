import BookRouter from '../api/book/routes'

//TODO de vérifier si la structure API_BASE_URL est correcte.
const apiBaseURl = process.env.API_BASE_URL || '/api/v1/'

const Router = (app) => {
  //Our first route is here
  app.get('/', (request, response) => {
    response.json({ message: 'Hello world !' });
  });

  app.use(`${apiBaseURl}books`, BookRouter);
};

export default Router;