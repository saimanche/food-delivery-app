import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    // userId will be added later when auth UI is connected
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false
    },

    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true
    },

    items: [
      {
        menuItemId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "MenuItem",
          required: true
        },
        quantity: {
          type: Number,
          default: 1
        }
      }
    ],

    totalAmount: {
      type: Number,
      required: true
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "paid"
    },

    orderStatus: {
      type: String,
      enum: ["placed", "preparing", "out_for_delivery", "delivered"],
      default: "placed"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
