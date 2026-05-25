import { ButtonHTMLAttributes } from "react";

export default function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="rounded-md border border-border bg-background px-3 py-1.5 text-sm hover:bg-accent disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
    >
      {children}
    </button>
  );
}