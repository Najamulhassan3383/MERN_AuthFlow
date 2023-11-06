import express from "express";
const UserRouter = express.Router();
import { authUser } from "../controllers/Usercontroller.js";
UserRouter.route("/").post(authUser);
UserRouter.route("/auth").post(authUser);

export default UserRouter;
