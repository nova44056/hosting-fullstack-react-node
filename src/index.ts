import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import { createConnection } from "typeorm";
import path from "path";
import { apiRoutes } from "./routes";

(() => {
  const app = express();
  app.use(express.json());
  console.log(process.env.APP_NAME);
  app.use(bodyParser.urlencoded({ extended: true }));
  createConnection().then(() => {
    console.log("Database is initialized");
  });
  app.use("/api/v1", apiRoutes);
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("web/build"));
    app.get("*", (_req, res) => {
      res.sendFile(path.resolve(__dirname, "web", "build", "index.html"));
    });
  }
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log("Server is running");
  });
})();
