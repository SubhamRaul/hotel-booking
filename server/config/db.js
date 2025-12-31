import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/HotelBooking`);
        console.log(`Connected to MongoDB ${connection.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export default connectDB;