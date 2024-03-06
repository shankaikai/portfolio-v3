import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const SectionHeader = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <h1
    ref={ref}
    {...props}
    className={cn(
      "text-xl text-accent font-semibold tracking-tight mb-4",
      className
    )}
  >
    {children}
  </h1>
));
