import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
});


// routes import
import homeRouter from './routes/home/home.routes.js';
app.use("/api/v1/home" , homeRouter)
