import mongoose from "mongoose";


const orderItemSchema = new mongoose.model({
     productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product"
     },
     quantity: {
          type: Number,
          required: true
     }
});
const orderSchema = new mongoose.Schema(
     {
          orderPrice: {
               type: Number,
               required: true
          },
          customer: {
               type: mongoose.Schema.Types.ObjectId,
               ref: "User",
               required: true
          },
          orderItems: {
               type: [orderItemSchema]
          },
          address: {
               type: String,
               required: true
          },
          status: {
               type: String,
               required: true,
               enum: ["PENDDING", "CANCELED", "DELEVERD"]
          }
     },
     {
          timestamps: true
     }
);

export const Oredr = mongoose.model("Order", orderSchema);