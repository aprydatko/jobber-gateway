import { Health } from '@gateway/controllers/health';
import express, { Router } from 'express';

class HealthRouters {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.get('/geteway-health', Health.prototype.health);

    return this.router;
  }
}

export const healthRoutes: HealthRouters = new HealthRouters();