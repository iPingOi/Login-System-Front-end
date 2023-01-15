import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode
}

export function Button({ children }: ButtonProps) {
  return (
    <button type="submit" className="bg-blue-500 text-white text-lg h-14 font-semibold w-full">{ children }</button>
  );
}