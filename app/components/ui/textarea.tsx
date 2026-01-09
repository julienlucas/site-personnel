import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLInputElement, React.ComponentProps<"textarea">>(
  ({ className, type, ...props }, ref) => {
    return (
      <textarea
        type={type}
        className={cn(
          "flex min-h-34 w-full rounded-md border border-input bg-gray-50 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground hover:bg-gray-100 focus:bg-transparent placeholder:text-muted-foreground outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
