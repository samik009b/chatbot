import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRouter } from "./routes/user.routes";
import { apiRouter } from "./routes/api.routes";
import { setupSwagger } from "./utils/swagger";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
console.log(">>> RUNNING app.ts FROM:", __dirname);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
setupSwagger(app);

app.use("/user", userRouter);
app.use("/api", apiRouter);

export default app;
