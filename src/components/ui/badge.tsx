import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export const Badge = forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ children, className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none",
      className
    )}
    {...props}
  >
    {children}
  </span>
));
