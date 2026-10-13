import { RequestHandler, Router } from 'express';
import { Model } from 'mongoose';

export function createResourceRouter(model: Model<unknown>): Router {
  const router = Router();

  router.get('/', async (_request, response, next) => {
    try {
      response.json(await model.find().lean());
    } catch (error) {
      next(error);
    }
  });

  const createResource: RequestHandler = async (request, response, next) => {
    try {
      const created = await model.create(request.body);
      response.status(201).json(created);
    } catch (error) {
      next(error);
    }
  };
  router.post('/', createResource);

  return router;
}
