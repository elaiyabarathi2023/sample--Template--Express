"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const viewadmins_controller_1 = __importDefault(require("../../controllers/admin/viewadmins.controller"));
const adminAuthenticateMiddleware_1 = __importDefault(require("../../controllers/admin/adminAuthenticateMiddleware"));
const router = (0, express_1.Router)();
const viewAdminsController = new viewadmins_controller_1.default();
router.get('/usernames', adminAuthenticateMiddleware_1.default, viewAdminsController.findAll);
exports.default = router;
