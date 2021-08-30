"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
(() => {
    const app = express_1.default();
    dotenv_1.default.config();
    app.use(express_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    typeorm_1.createConnection().then(() => {
        console.log("Database is initialized");
    });
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log("Server is running");
    });
})();
//# sourceMappingURL=index.js.map