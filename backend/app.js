import express from "express";
import router from "./routes/productRoute";
import { errorMiddleware } from "./middleware/error";


const app = express();



//routes middleware
app.use(express.json());
app.use("/api/v1",router);



//middleware for error
app.use(errorMiddleware);

export default app;
