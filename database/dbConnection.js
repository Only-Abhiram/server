import mongoose from "mongoose";

export const dbConnection = () => {
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI environment variable is not defined");
    return;
  }

  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occurred while connecting to database:", err);
    });
};
