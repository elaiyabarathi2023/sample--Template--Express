"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const add_hotels_controller_1 = __importDefault(require("../../controllers/admin/add_hotels.controller"));
const uploadMiddleware_1 = require("../../controllers/admin/uploadMiddleware");
const router = express_1.default.Router();
const hotelController = new add_hotels_controller_1.default();
// Define the route to create a hotel with the uploadMiddleware
router.post('/', uploadMiddleware_1.uploadMiddleware.array("image", 10), hotelController.create);
exports.default = router;
