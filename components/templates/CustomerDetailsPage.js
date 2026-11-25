import moment from "moment"
import Link from "next/link"
import { useRouter } from "next/router"

function CustomerDetailsPage({ data }) {
  const router = useRouter()

  const deleteHandler = async () => {
    const res = await fetch(`/api/delete/${data._id}`, {
      method: "DELETE",
    })

    const result = await res.json()

    if (result.status === "success") router.replace("/")
  }

  return (
    <div className="mx-auto max-w-4xl">
      {/* Page Heading */}
      <div className="mb-8 flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-center">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Customers / Details
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Customer Details
          </h1>

          <p className="mt-2 text-sm text-muted">
            View customer information and purchased products.
          </p>
        </div>

        <span className="w-fit rounded-md border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
          Customer #{String(data._id).slice(-6)}
        </span>
      </div>

      {/* Customer Information */}
      <section className="mb-6 rounded-lg border border-border bg-surface p-5 sm:p-7">
        <div className="mb-6 border-b border-border pb-4">
          <h2 className="text-base font-semibold text-foreground">
            Personal Information
          </h2>
          <p className="mt-1 text-sm text-muted">
            Basic contact and personal details.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-muted">
              First Name
            </span>
            <p className="mt-2 text-sm font-medium text-foreground">
              {data.name}
            </p>
          </div>

          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-muted">
              Last Name
            </span>
            <p className="mt-2 text-sm font-medium text-foreground">
              {data.lastName}
            </p>
          </div>

          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-muted">
              Email Address
            </span>
            <p className="mt-2 break-all text-sm font-medium text-foreground">
              {data.email}
            </p>
          </div>

          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-muted">
              Phone Number
            </span>
            <p className="mt-2 text-sm font-medium text-foreground">
              {data.phone || "—"}
            </p>
          </div>

          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-muted">
              Address
            </span>
            <p className="mt-2 text-sm font-medium text-foreground">
              {data.address || "—"}
            </p>
          </div>

          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-muted">
              Postal Code
            </span>
            <p className="mt-2 text-sm font-medium text-foreground">
              {data.postalCode || "—"}
            </p>
          </div>

          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-muted">
              Registration Date
            </span>
            <p className="mt-2 text-sm font-medium text-foreground">
              {data.date ? moment(data.date).utc().format("YYYY-MM-DD") : "—"}
            </p>
          </div>
        </div>
      </section>

      {/* Purchased Products */}
      <section className="mb-6 rounded-lg border border-border bg-surface p-5 sm:p-7">
        <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
          <div>
            <h2 className="text-base font-semibold text-foreground">
              Purchased Products
            </h2>
            <p className="mt-1 text-sm text-muted">
              Products associated with this customer.
            </p>
          </div>

          <span className="rounded-md border border-border bg-surface-elevated px-2.5 py-1 text-xs font-medium text-muted">
            {data.products.length} Items
          </span>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-3 gap-4 border-b border-border px-3 py-3 text-xs font-semibold uppercase tracking-wider text-muted">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
        </div>

        {/* Product Rows */}
        <div className="divide-y divide-border">
          {data.products.map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 px-3 py-4 transition-colors hover:bg-surface-elevated/50"
            >
              <p className="wrap-break-word text-sm font-medium text-foreground">
                {product.name}
              </p>

              <p className="text-sm text-muted">{product.price}</p>

              <p className="text-sm text-muted">{product.qty}</p>
            </div>
          ))}

          {data.products.length === 0 && (
            <p className="py-8 text-center text-sm text-muted">
              No products found for this customer.
            </p>
          )}
        </div>
      </section>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-end gap-3">
        <Link
          href={`/edit/${data._id}`}
          className="rounded-md border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-muted transition-colors cursor-pointer hover:border-muted hover:bg-surface-elevated hover:text-foreground"
        >
          Edit Customer
        </Link>

        <button
          type="button"
          onClick={deleteHandler}
          className="cursor-pointer rounded-md border border-red-500/30 bg-red-500/5 px-5 py-2 text-sm font-medium text-red-400 transition-colors hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-300"
        >
          Delete Customer
        </button>
      </div>
    </div>
  )
}

export default CustomerDetailsPage
