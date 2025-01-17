import express, { Application, NextFunction, Request, Response } from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";

const app: Application = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_PORT || "http://localhost:5173/",
    methods: ["GET", "POST", "PUT"], // Métodos permitidos
    credentials: true, // Para permitir el uso de cookies
  })
);

app.use(cookieParser());

app.use(morgan("dev"));

app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ msg: "not found" });
});

export default app;
