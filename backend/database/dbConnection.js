import mongoose from "mongoose";

export const dbConnection =() =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: ""
    })
    .then(() =>{
        console.log("connected to database");
    })
    .catch((err) =>{
        console.log(`some error occured while connected to database: ${err}`);
    });
};