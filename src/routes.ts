import { Application } from 'express';
import { healthRoutes } from '@gateway/routes/health';
import { authRoutes } from '@gateway/routes/auth';
import { currentUserRouters } from '@gateway/routes/current-user';
import { authMiddleware } from '@gateway/services/auth-middleware';
import { searchRoutes } from '@gateway/routes/search';
import { buyerRouters } from '@gateway/routes/buyer';
import { sellerRouters } from '@gateway/routes/seller';

const BASE_PATH = '/api/gateway/v1';

export const appRoutes = (app: Application) => {
  app.use('', healthRoutes.routes());
  app.use(BASE_PATH, authRoutes.routes());
  app.use(BASE_PATH, searchRoutes.routes());

  app.use(BASE_PATH, authMiddleware.verifyUser, currentUserRouters.routes());
  app.use(BASE_PATH, authMiddleware.verifyUser, buyerRouters.routes());
  app.use(BASE_PATH, authMiddleware.verifyUser, sellerRouters.routes());
};
