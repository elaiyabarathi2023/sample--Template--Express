import { Router } from 'express';
import adminSignIn from '../../controllers/admin/signin.controller';



class SignInRoutes {
  router = Router();
  signInController = new adminSignIn();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Create a new Tutorial
    this.router.post('/', this.signInController.login);

  }
}

export default new SignInRoutes().router;
