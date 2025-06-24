import { Application } from 'express';
import { healthRoutes } from '@gateway/routes/health';
import { authRoutes } from '@gateway/routes/auth';
import { currentUserRoutes } from '@gateway/routes/current-user';
import { authMiddleware } from '@gateway/services/auth-middleware';
import { searchRoutes } from '@gateway/routes/search';
import { buyerRouters } from '@gateway/routes/buyer';
import { sellerRouters } from '@gateway/routes/seller';
import { gigRoutes } from '@gateway/routes/gig';
import { orderRoutes } from '@gateway/routes/order';
import { reviewRoutes } from '@gateway/routes/review';

const BASE_PATH = '/api/gateway/v1';

export const appRoutes = (app: Application) => {
  app.use('', healthRoutes.routes());
  app.use(BASE_PATH, authRoutes.routes());
  app.use(BASE_PATH, searchRoutes.routes());

  app.use(BASE_PATH, authMiddleware.verifyUser, currentUserRoutes.routes());
  app.use(BASE_PATH, authMiddleware.verifyUser, buyerRouters.routes());
  app.use(BASE_PATH, authMiddleware.verifyUser, sellerRouters.routes());
  app.use(BASE_PATH, authMiddleware.verifyUser, gigRoutes.routes());
  app.use(BASE_PATH, authMiddleware.verifyUser, orderRoutes.routes());
  app.use(BASE_PATH, authMiddleware.verifyUser, reviewRoutes.routes());
};
