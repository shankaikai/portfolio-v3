import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "rounded-md bg-secondary px-2.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors duration-200 ease-in-out cursor-pointer",
      className
    )}
    {...props}
  >
    {children}
  </button>
));
