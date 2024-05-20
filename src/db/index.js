import mongoose from "mongoose";

import { DB_Name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_Name}`
    );
    console.log(`\n MongoDB coonected !!
    DB HOST: ${connectInstance.connection.host}`);
  } catch (error) {
    console.log("Monggodb connection errror", error);
    process.exist(1);
  }
};

export default connectDB;
