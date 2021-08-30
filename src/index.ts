import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import { createConnection } from "typeorm";
import path from "path";

(() => {
  const app = express();
  app.use(express.json());
  console.log(process.env.APP_NAME);
  app.use(bodyParser.urlencoded({ extended: true }));
  createConnection().then(() => {
    console.log("Database is initialized");
  });

  if (process.env.NODE_ENV === "production") {
    console.log("--- Production ---");
    app.use(express.static("web/build"));
    app.get("*", (_req, res) => {
      res.sendFile(path.resolve(__dirname, "web", "build", "index.html"));
    });
  }
  app.get("/api/v1", (_req, res) => {
    res.status(200).json({
      env: process.env,
    });
  });
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log("Server is running");
  });
})();
