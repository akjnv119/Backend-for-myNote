import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/notes_1`)
        console.log("MongoDB Connected Successfully");
        
    } catch (error) {
        console.log("MongoDB connection failed" , error);
        process.exit(1)
    }
}