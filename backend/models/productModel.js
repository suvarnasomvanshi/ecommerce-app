import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "please enter your  product name"],
    trim: true,
  },

  description: {
    type: String,
    required: [true, "please enteryour decription"],
  },

  price: {
    type: Number,
    required: [true, "please enter your product price"],
    maxLength: [8, "price cannot exceed more than 8 characters"],
  },

  rating: {
    type: String,
    default: 0,
  },

  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  category: {
    type: String,
    required: [true, "please enter product category"],
  },

  stock: {
    type: String,
    required: [true, "please enter product stock"],
    maxLength: [4, "stock cannot exceed 4 characters"],
    default: 0,
  },
  
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      Comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Product", productSchema);
