import mongoose from "mongoose";
// track the connection
let isConnected = false;
export const connectToDataBase = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("DB connected already");
    return;
  }
  try {
    // MOGODB.URL заменил на MONGODB_URI подключение vercel mongo
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "test",
    });
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
