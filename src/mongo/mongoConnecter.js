import mongoose from "mongoose";
const uri = "mongodb://127.0.0.1:27017/";
const dbName = "CD_BACKEND";
export default function mongoConnect(){
    try {
        mongoose.connect(`${uri}${dbName}`);
        console.log("Connected to MongoDB");
    }catch(e){
        console.log(e);
        console.log("Error connecting to MongoDB");
    }
}