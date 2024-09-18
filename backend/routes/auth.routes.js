import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

// router.post("/login", (req, res) => {
//   res.send("login Route");
// });

router.post("/logout", logout);

export default router;
