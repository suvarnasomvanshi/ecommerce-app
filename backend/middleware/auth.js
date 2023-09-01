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

    req.user = await User.findById(decodeData.id);

    next();

})




export const authorizeRoles = (...roles) =>{

    return (req,res,next) =>{

        if(!roles.includes(req.user.role)){
           return next (new ErrorHander(
                `Role : ${req.user.role} is not allowed to access this resource`,
                 403
              )
            );
        }

        next();
    };   
};

export default authorizeRoles 



