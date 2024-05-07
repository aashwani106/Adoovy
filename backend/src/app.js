import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config({
  path: "./.env",
});

app.use(
  cors({
    origin: process.env.CORS_ORIGIN ,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

import homeRouter from "./routes/home/home.routes.js";
app.use("/api/v1/home", homeRouter);

import userRoutes from "./routes/home/user.routes.js";
app.use("/api/v1/user", userRoutes);

import sellerRoutes from "./routes/home/seller.route.js";
app.use("/api/v1/seller", sellerRoutes);

export { app };
