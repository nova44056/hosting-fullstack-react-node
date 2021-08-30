import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import { createConnection } from "typeorm";
import dotenv from "dotenv";
import ormconfig from "./ormconfig";
import path from "path";

(() => {
  const app = express();
  dotenv.config();
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  createConnection(ormconfig).then(() => {
    console.log("Database is initialized");
  });
  if (process.env.NODE_ENV === "production") {
    console.log("--- Production ---");
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
