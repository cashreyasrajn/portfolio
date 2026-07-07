import * as React from "react";
import { cn } from "@/app/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-sm border border-navy/12 bg-white px-4 py-2 text-[14px] text-navy file:border-0 file:bg-transparent file:text-[14px] file:font-medium placeholder:text-navy/55 focus-visible:outline-none focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold/20 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
