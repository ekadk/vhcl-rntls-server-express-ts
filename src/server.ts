import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./router";
import { errorHandler } from "./middlewares";

const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(router);
server.use(errorHandler);

export default server;
