import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import resumeRoutes from "./routes/resumeRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import viewRoutes from "./routes/viewRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import publicRoutes from "./routes/publicRoutes.js";
import AppError from "./utils/AppError.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

const app = express();

const rawOrigins = (
  process.env.FRONTEND_URL ||
  process.env.CLIENT_URL ||
  "http://localhost:3000"
)
  .split(",")
  .map((o) => o.trim().replace(/\/$/, ""))
  .filter(Boolean);

const allowedOrigins = new Set(rawOrigins);

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.has(origin)) return callback(null, true);
    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("ResumeVault API is running...");
});

app.use("/api/resume", resumeRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/view", viewRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/public", publicRoutes);

app.use((req, res, next) => {
  next(new AppError(`Route not found: ${req.method} ${req.originalUrl}`, 404));
});

app.use(errorMiddleware);

export default app;
