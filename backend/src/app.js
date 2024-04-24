import express from 'express';
const app = express()



//routes
import homeRouter from './routes/home/home.routes.js';
app.use("/api/v1/home" , homeRouter);
import userRoutes from './routes/home/user.routes.js';
app.use("/api/v1/user" , userRoutes);





export { app }