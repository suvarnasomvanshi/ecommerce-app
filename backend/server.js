
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


const server = app.listen(process.env.PORT,()=>{
  console.log(`server is working on http://localhost ${process.env.PORT}`)
})




//handelling Uncaught Exception
process.on("uncaughtException",(err)=>{
  console.log(`Error:${err.message}`);
  console.log(`shutting down the server due to Unhandled promise Rejection`);
  process.exist(1);

})



// Unhandled Promise rejection
process.on("unhandledRejection",err=>{
  console.log(`Error :${err.message}`);
  console.log(`shutting down the server due to Unhandled promise Rejection`);

  server.close(()=>{
    process.exist(1);
  })
})







