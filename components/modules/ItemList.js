import FormInput from "./FormInput"

function ItemList({ form, setForm }) {
  const { products } = form
  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    })
    console.log(products)
  }

  const changeHandler = (e, index) => {}

  const deleteHandler = (index) => {}

  return (
    <div>
      <p>Purchased products</p>
      {products.map((product, index) => (
        <div key={index}>
          <FormInput
            name="name"
            label="Product Name"
            type="text"
            value={product.name}
            onChange={(e) => changeHandler(e, index)}
          />

          <FormInput
            name="price"
            label="Price"
            type="text"
            value={product.price}
            onChange={(e) => changeHandler(e, index)}
          />

          <FormInput
            name="qty"
            label="Quantity"
            type="number"
            value={product.qty}
            onChange={(e) => changeHandler(e, index)}
          />
          <div>
            <button onClick={() => deleteHandler(index)}>Remove</button>
          </div>
        </div>
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  )
}

export default ItemList
