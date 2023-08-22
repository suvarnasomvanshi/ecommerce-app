import express from "express"
import { createProduct, deleteProduct, getAllProducts, getProductDetails, updateProduct } from "../controllers/productController";
import { isAuthenticatedUser } from "../middleware/auth";


const router = express.Router();



router.get("/products",isAuthenticatedUser,getAllProducts);
router.post("/product/new",createProduct);
router.put("/product/:id",updateProduct);
router.delete("/product/:id",deleteProduct);
router.all("/product/:id",getProductDetails)



export default router;




