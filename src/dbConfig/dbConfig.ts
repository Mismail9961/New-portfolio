import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("Connected", () => {
      console.log("Mongodb Connected Successfully");
    });

    connection.on("Error", (err) => {
      console.log("Mongodb Connection error" + err);
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong")
    console.error(error)
  }
}
