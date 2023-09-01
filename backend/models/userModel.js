import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
const Schema = mongoose.Schema;



const userSchema = new Schema({

    
    name : {
        type : String,
        required : [true,"please enter your name"],
        maxLength : [30,"Name cannot exceed 30 characters"],
        minLength : [4,"Name should have greater than 4 letters"],
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

userSchema.pre("save",async function(next){
    if(!this.isModified("password"))
    this.password = bcrypt.hash(this.password,10);
    next();
})


//JWT TOKEN
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn : process.env.JWT_EXPIRE,
    })
}


//compare Password 
userSchema.methods.comparePassword = async function (enterPassword){
      return await bcrypt.compare(enterPassword,this.password);
}






export default mongoose.model("User",userSchema);


