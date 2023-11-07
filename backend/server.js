import express from "express";
import dotenv from "dotenv";
import UserRouter from "./routes/Userroutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

app.use("/api/users", UserRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Serve at http://localhost:${process.env.PORT}`);
});
