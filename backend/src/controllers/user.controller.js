import { asyncHandler } from "../utils/asyncHandler.js";
import { User} from "../models/user.model.js"

const registerUser = asyncHandler( async (req,res) => {

  console.log('body' , req.body )
  return
  let fullName = 'ax'
  let email = 'ex';
  let username = 'dx'
  let password ='dx'
  const user = await User.create({
    fullName,
    email, 
    password,
    username: username.toLowerCase()
})

  res.status(200).json({
    message : "okks"
  })



});

export { registerUser };
