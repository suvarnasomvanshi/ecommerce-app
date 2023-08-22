import User from "../models/userModel";
import ErrorHander from "../utils/errorhander";
import catchAsyncErrors from "../middleware/catchAsyncError";
import catchAsyncError from "../middleware/catchAsyncError";
import sendToken from "../utils/jwtToken";


// Registrater a user 

export const registerUser = catchAsyncErrors(async(req,res,next)=>{
    const {name,email,password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id : "this is sample id ",
            url :"profilePicUrl"
        }
    });


    sendToken(user,201,res);
})





//Login user

export const loginUser = catchAsyncError(async (req,res,next)=>{

    const {email,password} =req.body;

    //checking if user has given password & email
   
    if(!email || !password){
        return next(new ErrorHander("Please eneter Email & password",400))

    }

    const user = await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHander(" Invalid email or password ",401));
    }

    const isPasswordMatched = user.comparePassword(password);
    if(!isPasswordMatched){
       return next(new ErrorHander(" Invalid email or password",401));
    }

    sendToken(user,200,res);    
});




//Logout User

export const logout = catchAsyncErrors(async(req,res,next)=>{

    res.cookie("token",null,{
        expires : new Date(Date.now()),
        httpOnly:true,
    });

    res.status(200).json({
        success:true,
        message :"Logged Out",
    })
})