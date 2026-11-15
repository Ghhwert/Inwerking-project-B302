import type React from "react";

type FieldProps=React.HtmlHTMLAttributes<HTMLInputElement>&{
    label: string;
    id: string;
    error?: string;
}

export default function Field({label, id, error, ...props}: FieldProps){
  return (
    <div className="flex flex-col items-start self-stretch gap-2">
      <label htmlFor={id} className="text-ink font-mono text-[12px] font-medium leading-[120%] tracking-[0.96px]">{label}</label>
      <input
        id={id}
        aria-invalid={!!error}
        className='px-3 py-4 self-stretch
          rounded-xl border-2 bg-white
          ${error ? "border-coral" : "border-ink hover:border-cobalt"}'
          {...props}
      />
    </div>
  )
}