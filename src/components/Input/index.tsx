import * as I from 'react-icons/md';

export function Input() {
  return (
    <label htmlFor="email" className="flex flex-col gap-3">
      <span className="text-gray-100 font-sans text-sm font-semibold">Email address</span>
      <div className="flex items-center gap-3 h-14 px-3 bg-gray-200 w-full">
        <I.MdOutlineAlternateEmail size={24} />
        <input type="email" id="email" className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none" autoFocus placeholder="Enter your email" />
      </div>
    </label>
  )
}