import mongoose from "mongoose";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type : String,
        required :[true,"please enter your name"],
        maxLength : [30,"Name cannot exceed 30 characters"],
        minLength : [4,"name should have greater than 4 letters"],
    },
    email : {
        type : String,
        required : [true ,"please enter your email"],
        unique : true,
        validate : [validator.isEmail, "please enter valid email"],
    },
    password : {
        type : String,
        required : [true,"please enter your email"],
        minLength : [8,"Name should have more than 8 characters"],
        select : false ,
    },
    avatar :{
          public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          }
        },
    role : {
        type : String,
        default :"user",
    },
    resetPasswordToken : String,
    resetPasswordExpire : Date,
})



export default mongoose.model("User",userSchema);