import * as React from "react";
import { cn } from "@/app/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-sm border border-navy/12 bg-white px-4 py-3 text-[14px] text-navy placeholder:text-navy/55 focus-visible:outline-none focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold/20 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
