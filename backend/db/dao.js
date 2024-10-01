import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbURI =
  process.env.DB_URI ||
  "mongodb://localhost:27017/digital-library?directConnection=true&serverSelectionTimeoutMS=2000&retryWrites=true&w=majority";

export default function createClient() {
  const client = mongoose.connect(dbURI);

  return client;
}
