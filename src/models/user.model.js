import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({
     username: {
          type: String,
          required: true,
          unique: true,
          trim: true,
          lowercase: true,
          index: true
     },
     email: {
          type: String,
          required: true,
          unique: true,
          trim: true,
          lowercase: true
     },
     fullName: {
          type: String,
          required: true,
          trim: true,
          index: true
     },
     avtar: {
          type: String, //cloudinary url
          required: true
     },
     coverImage: {
          type: String
     },
     password: {
          type: String,
          required: [true, "Password is required"]
     },
     refreshToken: {
          type: String,
          required: true
     },
     watchHistory: [
          {
               type: Schema.Types.ObjectId,
               ref: "Viedo"
          }
     ]
},
{timestamps: true});


userSchema.pre("save", async function(next){
     if(!this.isModified("password")) return next();
     this.password = bcrypt.hash(this.password, 10);
     next();
});

userSchema.methods.isPasswordCorrect = async function(password){
     return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema);