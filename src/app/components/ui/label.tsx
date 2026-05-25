import { LabelHTMLAttributes } from "react";

export default function Label({children, ...props}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      {...props}
      className="block text-sm font-medium text-foreground"
    >
      {children}
    </label>
  );
}