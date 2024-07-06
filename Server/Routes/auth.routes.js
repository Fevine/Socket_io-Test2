import express from "express";
import { Login, Logout, SignUp } from "../Controllers/auth.controller.js";


const router = express.Router()

router.post("/signup", SignUp)

router.post("/login", Login)

router.post("/logout", Logout)

export default router
