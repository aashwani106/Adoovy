import { Router } from "express";
// import { registerUser } from "../../controllers/user.controller.js"
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World again..!");
});
// router.post('/register', registerUser )      method 1

export default router;
