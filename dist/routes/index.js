"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.apiRoutes = express_1.Router();
exports.apiRoutes.get("/", (_req, res) => {
    res.status(200).json({
        env: process.env,
    });
});
//# sourceMappingURL=index.js.map