"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMiddleware = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        console.log("test");
        cb(null, 'uploads/'); // Set the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        const fileName = Date.now() + '-' + file.originalname;
        // req.body.fileNames.push(fileName);
        cb(null, fileName); // Set the filename
    },
});
exports.uploadMiddleware = (0, multer_1.default)({ storage: storage });
// export default function (req: Request, res: Response, next: NextFunction) {
//   uploadMiddleware.array('fileFieldName')(req, res, function (err) {
//     if (err) {
//       return res.status(500).json({ message: 'File upload error' });
//     }
//     next();
//   });
// }
