import { useState } from "react"
import Form from "../modules/Form"
import { useRouter } from "next/router"
import moment from "moment"

function CustomerEditPage({ data, id }) {
  const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") : ""

  const [form, setForm] = useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || "",
    address: data.address || "",
    postalCode: data.postalCode || "",
    products: data.products || [],
    date,
  })

  const router = useRouter()

  const cancelHandler = () => router.replace("/")

  const editHandler = async () => {
    const res = await fetch(`/api/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    })

    const data = await res.json()

    if (data.status === "success") router.replace("/")
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Page Heading */}
      <div className="mb-8 border-b border-border pb-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Customers / Edit
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Edit Customer
        </h1>

        <p className="mt-2 text-sm text-muted">
          Update the customer's information and purchased products.
        </p>
      </div>

      {/* Form Container */}
      <div className="rounded-lg border border-border bg-surface p-5 sm:p-8">
        <Form form={form} setForm={setForm} />

        {/* Actions */}
        <div className="mt-8 flex items-center justify-end gap-3 border-t border-border pt-6">
          <button
            type="button"
            onClick={cancelHandler}
            className="cursor-pointer rounded-md border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-muted hover:bg-surface-elevated hover:text-foreground"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={editHandler}
            className="cursor-pointer rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-primary-hover active:scale-[0.98]"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomerEditPage
