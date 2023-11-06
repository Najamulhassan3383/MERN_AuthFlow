import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(process.env.PORT, () => {
  console.log("Serve at http://localhost:5000");
});
