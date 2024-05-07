import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  console.log("body", req.body);
  const { fullName, email, password, le_id } = req.body;

  const user = await User.create({
    fullName,
    email,
    password,
    le_id,
  });

  if (user.le_id) {
    res.status(200).json({
      error: false,
      data: user,
    });
  } else {
    res.status(500).json({
      error: false,
      data: "Something went wrong",
    });
  }
});


const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = JSON.parse(req.params.dtls);

  try {
    let resp = await User.findOne(
      { email: email, password: password },
      "name email password le_id"
    );
    console.log("l", resp);
    if (resp != null) {
      res.send({
        error: false,
      });
    } else {
      res.send({
        error: true,
        data: "Email or Password is not correct !!",
      });
    }
  } catch (error) {
    console.log("error =>", error);
  }
  
});
export { registerUser, loginUser };
