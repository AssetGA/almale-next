"use server";

import mongoose from "mongoose";
import initDatabase from "../utils/InitDatabase";

let isConnected = false; // Track the connection state

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log("Database is already connected");
    return;
  }

  try {
    // Connect to MongoDB
    await mongoose.set("strictQuery", true); // Optional, depending on your Mongoose version
    await mongoose.connect(
      process.env.MONGODB_URI,
      {
        dbName: "test", // Replace with your actual database name
      },
      60000
    );

    isConnected = true; // Set the connection flag
    console.log("Database connection established");

    // Initialize the database (e.g., create indexes)
    initDatabase();
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Failed to connect to the database");
  }
};
