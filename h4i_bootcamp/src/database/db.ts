// db.ts
import mongoose from "mongoose";
import Blog from "./blogSchema";

const url = "mongodb+srv://deep:$Dsingh123@cluster0.d2p5k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let connection: typeof mongoose;

const connectDB = async () => {
  try {
    if (!connection) {
      connection = await mongoose.connect(url);
      console.log("Connected to MongoDB");
    }
    return connection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export const getBlogBySlug = async (slug: string) => {
  return Blog.findOne({ slug }).exec();
};

export default connectDB;
