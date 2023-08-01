import mongoose from "mongoose";



const connectDatabase =()=>{

mongoose.connect(process.env.Db_URI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.then((data)=>{console.log(`Mongodb connected with server :${data.connection.host}`)})
.catch((err)=>{console.log(err)})

}

export default connectDatabase;









