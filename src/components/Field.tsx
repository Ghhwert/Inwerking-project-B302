type FieldProps={
    label: string, 
    id: string, 
    type?: string, 
    placeholder?: string
}

export default function Field({label, placeholder, id, type="text"}: FieldProps){
  return (
    <div className="flex flex-col items-start self-stretch gap-2">
      <label htmlFor={id} className="text-ink font-mono text-[12px] font-medium leading-[120%] tracking-[0.96px]">{label}</label>
      <input type={type}
        id={id}
        placeholder={placeholder}
        className="input px-3 py-4 self-stretch
          rounded-xl border-[2px] border-ink bg-white
          hover:border-cobalt"
      />
    </div>
  )
}