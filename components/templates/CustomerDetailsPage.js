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
    <div>
      <h4>Customer Details</h4>
      <div>
        <div>
          <span>Name: </span>
          <p>{data.name}</p>
        </div>

        <div>
          <span>Last Name: </span>
          <p>{data.lastName}</p>
        </div>

        <div>
          <span>Email: </span>
          <p>{data.email}</p>
        </div>

        <div>
          <span>Phone: </span>
          <p>{data.phone}</p>
        </div>

        <div>
          <span>Address: </span>
          <p>{data.address}</p>
        </div>

        <div>
          <span>Postal Code: </span>
          <p>{data.postalCode}</p>
        </div>

        <div>
          <span>Date: </span>
          <p>{moment(data.date).utc().format("YYYY-MM-DD")}</p>
        </div>
      </div>
      <div>
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        {data.products.map((product, index) => (
          <div key={index}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.quantity}</p>
          </div>
        ))}
        <div>
          <button onClick={deleteHandler}>Delete</button>
          <Link href={`/edit/${data._id}`}>Edit</Link>
        </div>
      </div>
    </div>
  )
}

export default CustomerDetailsPage
