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
const cat_model_1 = __importDefault(require("../models/cat.model"));
const mongoose_1 = __importDefault(require("mongoose"));
class TutorialController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const kitty = yield cat_model_1.default.create({ name: 'Zildjian' });
            kitty.save().then(() => console.log('saved'));
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const catData = yield cat_model_1.default.find({}).exec();
            res.send(catData);
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const catData = yield cat_model_1.default.findOne({ "_id": new mongoose_1.default.Types.ObjectId(req.params.id) }).exec();
            res.send(catData);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.status(200).json({
                    message: "update OK",
                    reqParamId: req.params.id,
                    reqBody: req.body
                });
            }
            catch (err) {
                res.status(500).json({
                    message: "Internal Server Error!"
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.status(200).json({
                    message: "delete OK",
                    reqParamId: req.params.id
                });
            }
            catch (err) {
                res.status(500).json({
                    message: "Internal Server Error!"
                });
            }
        });
    }
}
exports.default = TutorialController;
