import Link from "next/link"
import { useRouter } from "next/router"

function Card({ customer }) {
  const router = useRouter()
  const deleteHandler = async () => {
    const res = await fetch(`/api/delete/${customer._id}`, { method: "DELETE" })
    const data = await res.json()
    console.log(data)
    if (data.status === "success") router.reload()
  }

  return (
    <div className="group flex flex-col justify-between gap-5 rounded-lg border border-border bg-surface mb-4 p-5 transition-colors hover:border-primary/40 sm:flex-row sm:items-center">
      {/* Customer Information */}
      <div className="min-w-0 flex-1">
        <div className="mb-2 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-sm font-bold uppercase text-primary">
            {customer.name?.charAt(0)}
            {customer.lastName?.charAt(0)}
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-base font-semibold text-foreground">
              {customer.name} {customer.lastName}
            </h3>
            <p className="mt-1 truncate text-sm text-muted">{customer.email}</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-2 border-t border-border pt-4 sm:border-0 sm:pt-0">
        <Link
          href={`/customer/${customer._id}`}
          className="rounded-md border border-border px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:border-primary/50 hover:text-primary"
        >
          Details
        </Link>

        <Link
          href={`/edit/${customer._id}`}
          className="rounded-md border border-border bg-transparent px-3.5 py-2 text-sm font-medium text-muted transition-colors cursor-pointer hover:border-muted hover:bg-surface-elevated hover:text-foreground"
        >
          Edit
        </Link>

        <button
          type="button"
          onClick={deleteHandler}
          className="cursor-pointer rounded-md border border-red-500/20 px-3.5 py-1.5 text-sm font-medium text-red-400 transition-colors hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Card
