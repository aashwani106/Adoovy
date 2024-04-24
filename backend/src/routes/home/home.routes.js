import { Router } from "express";
import { loginUser } from "../../controllers/user.controller.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World again..!");
});

// router.route("/login").post(loginUser)

export default router;
