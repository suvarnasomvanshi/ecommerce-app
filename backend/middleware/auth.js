import ErrorHander from "../utils/errorhander";
import catchAsyncError from "./catchAsyncError";
import jwt from "jsonwebtoken";
import User from "../models/userModel"

export const isAuthenticatedUser = catchAsyncError(async(req,res,next)=>{
    const token = req.cookie;
    

    if(!token){
        return next(new ErrorHander("please login to access this resource",401));
    }

    const decodeData = jwt.verify(token,process.env.JWT_SECRET);

    req.user = await User.findById(decodeData._id);
    next();
})
