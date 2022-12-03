import { HTMLInputTypeAttribute, ReactNode } from "react";

type ButtonProps = {
  type?: HTMLInputTypeAttribute
  children: ReactNode
}

export function Button({ children }: ButtonProps) {
  return (
    <button className="bg-blue-500 text-white text-lg h-14 font-semibold w-full">{ children }</button>
  );
}