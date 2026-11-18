import mongoose from "mongoose"

async function connectDB() {
  if (mongoose.connections[0].readyState) return
  mongoose.connect(process.env.MONGO_URI)
  console.log("Connected to the DB")
}

export default connectDB
