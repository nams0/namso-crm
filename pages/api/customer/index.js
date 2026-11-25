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

  if (req.method === "POST") {
    const data = req.body.data
    const { name, lastName, email } = data

    if (
      !name ||
      name.length < 3 ||
      !lastName ||
      lastName.length < 3 ||
      !email ||
      email.length < 7
    )
      return res.status(400).json({
        status: "failed",
        message: "Invalid data, insert fields correctly",
      })

    try {
      const customer = await Customer.create(data)
      res
        .status(201)
        .json({ status: "success", message: "Data is created", data: customer })
    } catch (error) {
      console.log(error)
      return res
        .status(500)
        .json({ status: "failed", message: "Error in storing data in DB" })
    }
  }
}
