import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'


cloudinary.config({ 
     cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
     api_key: process.env.CLOUDINARY_API_KEY, 
     api_secret: process.env.CLOUDINARY_API_SECRET 
});


const uploadOnCloudinary = async(localFilePath)=> {
     try {
          if(!localFilePath) return null;
          const res = await cloudinary.uploader.upload(localFilePath, {
               resource_type: "auto"
          });
          console.log("File has been uploaded successfully on: ", res.url);
          return res;
     } catch (error) {
          fs.unlinkSync(localFilePath); //removes the temporary file as the upload operation got failed
          return null;
     }
}


export { uploadOnCloudinary };