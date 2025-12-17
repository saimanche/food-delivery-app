import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    // MealDB mapped fields
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    description: {
      type: String
    },

    // Delivery-app simulated fields
    rating: {
      type: Number,
      default: 4.3
    },
    deliveryTime: {
      type: String,
      default: "30-40 mins"
    },
    priceRange: {
      type: String,
      default: "₹200–₹500"
    },
    isOpen: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Restaurant", restaurantSchema);
