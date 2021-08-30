import { Router } from "express";

export const apiRoutes = Router();
apiRoutes.get("/", (_req, res) => {
  return res.status(200).json({
    message: "Hello World",
  });
});
