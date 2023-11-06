import express from "express";
import dotenv from "dotenv";
import UserRouter from "./routes/Userroutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/users", UserRouter);

app.listen(process.env.PORT, () => {
  console.log("Serve at http://localhost:5000");
});
