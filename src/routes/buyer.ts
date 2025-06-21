import { Get } from '@gateway/controllers/users/buyer/get';
import express, { Router } from 'express';

class BuyerRouters {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.get('/buyer/email', Get.prototype.email);
    this.router.get('/buyer/username', Get.prototype.currentUsername);
    this.router.get('/buyer/:username', Get.prototype.username);

    return this.router;
  }
}

export const buyerRouters: BuyerRouters = new BuyerRouters();