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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authenticate(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = req.header('Authorization');
        if (!token) {
            return res.status(401).json({ message: 'Authorization token is missing' });
        }
        try {
            const decoded = jsonwebtoken_1.default.verify(token, 'your-secret-key');
            // Now TypeScript knows that 'decoded' is of type JwtPayload
            if (typeof decoded === 'string') {
                return res.status(401).json({ message: 'Invalid token format' });
            }
            // You can access 'username' safely
            const username = decoded.username;
            // You can check if the user is valid based on your requirements here.
            // For example, you can query the database to see if the user exists.
            // If valid, you can return a success response and call next
            res.status(200).json({ message: 'Authentication successful', user: username });
            next(); // Call next here to pass control to the next middleware
        }
        catch (error) {
            res.status(401).json({ message: 'Authentication failed' });
        }
    });
}
exports.default = authenticate;
