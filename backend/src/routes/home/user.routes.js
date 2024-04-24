import { Router } from "express";
import { registerUser } from "../../controllers/user.controller.js"

const router = Router();


// router.post('/register', registerUser )      method 1

router.route("/register").post(registerUser)  //method2

export default router;
