import ErrorHander from "../utils/errorhander";

export const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server error";


  //Wrong Mongodb Id error
  if(err.name === "CastError"){
     const message = `Resource not found.Invalid :${err.path}`;
     err = new ErrorHander(message,404);
  }
    res.status(err.statusCode).json({ 
    success: false, 
    error: err.message,
 });
 
};
