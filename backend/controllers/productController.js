import Product from "../models/productModel";



export const createProduct = async(req,res,next) =>{
 const product = await Product.create(req.body);

 res.send(201).json({success:true,product});

}



export const getAllProducts =(req,res) =>{
 res.status(200).json({message:"routing is working fine"})
}