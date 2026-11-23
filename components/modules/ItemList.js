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

  const changeHandler = (e, index) => {
    const { name, value } = e.target
    const newProducts = [...products]
    newProducts[index][name] = value
    setForm({ ...form, products: newProducts })
  }

  const deleteHandler = (index) => {
    const newProducts = [...products]
    newProducts.splice(index, 1)
    setForm({ ...form, products: newProducts })
  }

  return (
    <section className="max-h-100 space-y-4 overflow-y-auto scrollbar-hide">
      {/* Section Heading */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <h3 className="text-base font-semibold text-foreground">
            Purchased Products
          </h3>
          <p className="mt-1 text-sm text-muted">
            Add products purchased by this customer.
          </p>
        </div>

        <span className="rounded-md border border-border bg-surface-elevated px-2.5 py-1 text-xs font-medium text-muted">
          {products.length} Items
        </span>
      </div>

      {/* Product List */}
      <div className="space-y-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="rounded-md border border-border bg-surface-elevated/50 p-4 transition-colors hover:border-border sm:p-5"
          >
            {/* Product Header */}
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-xs font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h4 className="text-sm font-semibold text-foreground">
                  Product Details
                </h4>
              </div>

              <button
                type="button"
                onClick={() => deleteHandler(index)}
                className="rounded-md px-3 py-1.5 text-xs font-medium text-red-400 transition-colors cursor-pointer hover:bg-red-400/10 hover:text-red-300"
              >
                Remove
              </button>
            </div>

            {/* Product Inputs */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
            </div>
          </div>
        ))}
      </div>

      {/* Add Product */}
      <button
        type="button"
        onClick={addHandler}
        className="group flex w-full items-center justify-center gap-2 rounded-md border border-dashed border-border py-3 text-sm font-medium text-muted transition-all cursor-pointer hover:border-primary/60 hover:bg-primary/5 hover:text-primary"
      >
        <span className="text-lg leading-none transition-transform group-hover:rotate-90">
          +
        </span>
        Add Another Product
      </button>
    </section>
  )
}

export default ItemList
