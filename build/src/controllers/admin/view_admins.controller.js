"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_model_1 = __importDefault(require("../../models/admin/login.model"));
class ViewAdmins {
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const admins = yield login_model_1.default.find({}, 'username').exec();
                const usernames = admins.map((admin) => admin.username);
                res.send(usernames);
            }
            catch (error) {
                console.error('Error fetching admin usernames:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
        });
    }
}
exports.default = ViewAdmins;
