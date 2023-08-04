import User from "../models/userModel";
import ErrorHander from "../utils/errorhander";
import catchAsyncErrors from "../middleware/catchAsyncError";


// Registrater a user 

export const registerUser = catchAsyncErrors(async(req,res,next)=>{
    const {name,email,password} = req.body;

    const user = await User.create({
        name,email,password,
        avatar:{
            public_id : "this is sample id ",
            url :"profilePicUrl"
        }
    });
    res.status(201).json({
        success :true,
        User,
    })
})