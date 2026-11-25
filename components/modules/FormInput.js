function FormInput({ name, label, type, value, onChange, required = false }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="ml-1 text-xl leading-none text-red-400">*</span>}
      </label>

      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-muted/60 hover:border-muted focus:border-primary focus:ring-1 focus:ring-primary/30"
      />
    </div>
  )
}

export default FormInput
