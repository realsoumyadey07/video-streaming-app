// require('dotenv').config({path: './env'})
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/index.js';

const app = express();


dotenv.config({
     path: './env'
})



connectDB()
.then(process.env.PORT || 8000,()=>{
     console.log(`Server is running on ${process.env.PORT}`);
})
.catch((err)=>{
     console.log("mongoDB connection faild!", err);
})

//iffy
// ;( async ()=>{
//      try {
//           await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//           app.on("error", (error)=>{
//                console.log(error);
//                throw error;
//           })
//           app.listen(process.env.PORT, ()=>{
//                console.log(`App is listening on port ${process.env.PORT}`);
//           })
//      } catch (error) {
//           console.log(error);
//           throw err
//      }
// })()
