import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const viedoSchema = new mongoose.Schema(
     {
          videoFile: {
               type: String, //cloudinary url
               required: true
          },
          thumbnail: {
               type: String,
               required: true
          },
          owner: {
               type: Schema.Types.ObjectId,
               ref: "User"
          },
          title: {
               type: String,
               required: true,
               trim: true
          },
          description: {
               type: String,
               required: true,
               trim: true
          },
          duration: {
               type: Number,
               required: true
          },
          views: {
               type: Number,
               default: 0
          },
          isPublished: {
               type: Boolean,
               required: true
          }
     },
     {
          timestamps: true
     }
)

viedoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", viedoSchema);