import ItemList from "./ItemList"

function Form({ form, setForm }) {
  return (
    <div className="space-y-8">
      <ItemList form={form} setForm={setForm} />
    </div>
  )
}

export default Form
