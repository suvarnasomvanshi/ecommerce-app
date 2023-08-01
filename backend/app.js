import express from "express";
import router from "./routes/productRoute";


const app = express();

//routes middleware
app.use(express.json());
app.use("/api/v1",router);

export default app;
