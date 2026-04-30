import mongoose from "mongoose";
import initDatabase from "../utils/InitDatabase";

let isInitialized = false;

export const connectToDatabase = async () => {
  console.log("connect");
  if (mongoose.connection.readyState === 1) {
    if (!isInitialized) {
      await initDatabase();
      isInitialized = true;
    }
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in environment variables");
  }

  try {
    await mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME || "test",
      serverSelectionTimeoutMS: 60000,
      connectTimeoutMS: 60000,
      socketTimeoutMS: 60000,
    });

    console.log("Database connection established");
    isInitialized = true;
    console.log("Database initialized");
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Failed to connect to the database");
  }
};
