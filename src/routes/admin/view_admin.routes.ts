import { Router } from 'express';
import ViewAdmins from '../../controllers/admin/view_admins.controller';
import adminAuthenticateMiddleware from '../../controllers/admin/adminAuthenticateMiddleware';

const router = Router();
const viewAdminsController = new ViewAdmins();

router.get('/usernames',adminAuthenticateMiddleware, viewAdminsController.findAll);

export default router;
