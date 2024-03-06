import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const ItemHeader = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <h2
    ref={ref}
    {...props}
    className={cn(
      "text-lg font-semibold text-accent tracking-tight",
      className
    )}
  >
    {children}
  </h2>
));
