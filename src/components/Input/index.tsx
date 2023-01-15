import { useState } from 'react';
import * as I from 'react-icons/md';

type InputProps = {
  name: string
  children: JSX.Element
  type: string
  attribute: string
  placeholder: string
}

export function Input({ name, children, type, attribute, placeholder }: InputProps) {
  const [password, setPassword] = useState();

  console.log(password);

  return (
    <label htmlFor={attribute} className="flex flex-col gap-3">
      <span className="text-gray-100 font-sans text-sm font-semibold">{name}</span>
      <div className="flex items-center gap-3 h-14 px-3 bg-gray-200 w-full">
        {/* <I.MdOutlineAlternateEmail size={24} /> */}
        {children}
        <input type={type} id={attribute} className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none" autoFocus placeholder={placeholder} onChange={() => setPassword} />
      </div>
    </label>
  )
}