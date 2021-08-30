"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.apiRoutes = express_1.Router();
exports.apiRoutes.get("/", (_req, res) => {
    return res.status(200).json({
        message: "Hello World",
    });
});
//# sourceMappingURL=index.js.map