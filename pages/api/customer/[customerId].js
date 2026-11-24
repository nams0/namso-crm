import Customer from "@/models/Customers"
import connectDB from "@/utils/connectDB"

export default async function handler(req, res) {
  try {
    await connectDB()
    console.log("Connected to DB")
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to the DB" })
  }

  if (req.method === "GET") {
    const id = req.query.customerId
    try {
      const customer = await Customer.findById(id)
      res.status(200).json({ status: "success", data: customer })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        status: "failed",
        message: "Error in retrieving data from database",
      })
    }
  }
}
