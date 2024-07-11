import express from 'express';
import HotelController from '../../controllers/admin/add_hotels.controller';
import { uploadMiddleware } from '../../controllers/admin/uploadMiddleware';

const router = express.Router();
const hotelController = new HotelController();

// Define the route to create a hotel with the uploadMiddleware
router.post('/', uploadMiddleware.array("image",10), hotelController.create);

export default router;  