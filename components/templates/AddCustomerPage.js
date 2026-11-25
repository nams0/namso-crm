import { useState } from "react"
import Form from "../modules/Form"
import { useRouter } from "next/router"
import toast from "react-hot-toast"

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

  const router = useRouter()

  const saveHandler = async () => {
    const res = await fetch("/api/customer", {
      method: "POST",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    })
    const data = await res.json()
    if (data.status === "success") {
      toast.success("Customer created successfully!")
      router.replace("/")
    } else {
      toast.error(data.message || "Failed to create customer!")
    }
  }

  const cancelHandler = () => {
    setForm({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postalCode: "",
      date: "",
      products: [],
    })
    router.push("/")
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 border-b border-border pb-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Customers / New
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Add new customer
        </h1>

        <p className="mt-2 text-sm text-muted">
          Enter the customer's information to create a new record.
        </p>
      </div>

      <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
        <Form form={form} setForm={setForm} />

        <div className="mt-8 flex items-center justify-end gap-3 border-t border-border pt-6">
          <button
            type="button"
            onClick={cancelHandler}
            className="rounded-md border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-muted transition-colors cursor-pointer hover:border-muted hover:bg-surface-elevated hover:text-foreground"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={saveHandler}
            className="rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-background transition-colors cursor-pointer hover:bg-primary-hover active:scale-[0.98]"
          >
            Save Customer
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddCustomerPage
