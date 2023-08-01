
import app  from "./app"; 
import dotenv from "dotenv";
import connectDatabase from "./config/database";

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";

const __filename = fileURLToPath(import.meta.url);     
const __dirname = dirname(__filename);                 

//config
 dotenv.config({ path: path.resolve(__dirname, "config", "config.env") });

//connecting to database
connectDatabase();



app.listen(process.env.PORT,()=>{
  console.log(`server is working on http://localhost ${process.env.PORT}`)
})







