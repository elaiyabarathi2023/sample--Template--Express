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
const hotel_model_1 = __importDefault(require("../../models/admin/hotel.model"));
class HotelController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("files", req.files);
            const { hotelname, image1, image2, image3, bedrooms, adults, kids, price, fileName } = req.body;
            // Validation checks for required fields
            if (!hotelname || !image1 || !image2 || !image3 || !bedrooms || !adults || !kids || !price) {
                return res.status(400).json({ message: 'Missing required fields' });
            }
            try {
                const createHotel = yield hotel_model_1.default.create({
                    hotelname,
                    image1,
                    image2,
                    image3,
                    bedrooms,
                    adults,
                    kids,
                    price,
                });
                res.status(201).json({
                    message: "Hotel created successfully",
                    hotel: createHotel,
                });
            }
            catch (err) {
                console.error('Error creating Hotel:', err);
                res.status(500).json({
                    message: "Internal Server Error",
                });
            }
        });
    }
}
exports.default = HotelController;
