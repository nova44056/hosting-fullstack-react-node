import { Router } from "express";

export const apiRoutes = Router();
apiRoutes.get("/", (_req, res) => {
  res.status(200).json({
    env: process.env,
  });
});
