import { useState } from "react"
import Form from "../modules/Form"

function AddCustomerPage() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: [],
  })

  const saveHandler = () => {}
  const cancelHandler = () => {}

  return (
    <div>
      <h4>Add new customer</h4>
      <Form form={form} setForm={setForm} />
      <div>
        <button onClick={cancelHandler}>Cancel</button>
        <button onClick={saveHandler}>Save</button>
      </div>
    </div>
  )
}

export default AddCustomerPage
