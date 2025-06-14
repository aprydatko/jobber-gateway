import { Search } from '@gateway/controllers/auth/search';
import express, { Router } from 'express';

class SearchRouters {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.get('/auth/search/gig/:from/:size/:type', Search.prototype.gigs);
    this.router.get('/auth/search/gigId', Search.prototype.gigById);

    return this.router;
  }
}

export const searchRoutes: SearchRouters = new SearchRouters();