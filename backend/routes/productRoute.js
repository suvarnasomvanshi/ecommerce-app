import express from "express"
import { createProduct, getAllProducts } from "../controllers/productController";


const router = express.Router();

router.get("/products",getAllProducts);
router.post("/product/new",createProduct);

export default router;


