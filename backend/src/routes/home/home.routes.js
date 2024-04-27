import { Router } from "express";
// import { registerUser } from "../../controllers/user.controller.js"
const router = Router();

router.post("/", (req, res) => {
  console.log(req.body)
  res.send("Hello World again..!");
});
// router.post('/register', registerUser )      method 1

export default router;
