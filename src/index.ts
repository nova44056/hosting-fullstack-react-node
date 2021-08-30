import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import { createConnection } from "typeorm";
import dotenv from "dotenv";

(() => {
  const app = express();
  dotenv.config();
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  createConnection().then(() => {
    console.log("Database is initialized");
  });
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log("Server is running");
  });
})();
