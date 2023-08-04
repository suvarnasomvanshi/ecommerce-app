import Product from "../models/productModel";
import ErrorHander from "../utils/errorhander";
import catchAsyncErrors from "../middleware/catchAsyncError";
import ApiFeatures from "../utils/apifeatures";



// Create Product  --- Admin
export const createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.send(201).json({ success: true, product });
});


// Get all Product
export const getAllProducts = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 5;
  const productCount = await Product.countDocuments();
  const apiFeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter().pagination(resultPerPage);
  const products = await apiFeatures.query;

  res.status(200).json({ 
    success: true, 
    products,
  productCount,
 });
});



// Update Product  --Admin
export const updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("product not found", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({ success: true, product });
});



// Delete product
export const deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("product not found", 404));
  }
  await product.deleteOne();
  res
    .status(200)
    .json({ success: true, message: " Product deleted successfully" });
});




// get product details
export const getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("product not found", 404));
  }
  res.status(200).json({ success: true, product });
});



