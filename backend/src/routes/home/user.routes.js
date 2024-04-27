import { Router } from "express";
import { loginUser, registerUser } from "../../controllers/user.controller.js"

const router = Router();


// router.post('/register', registerUser )      method 1

router.route("/register").post(registerUser) 
router.route("/login:dtls").get(loginUser)   


export default router;
