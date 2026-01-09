import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg py-4 border border-gray-300 text-card-foreground",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative flex flex-col space-y-1.5 p-6 -mb-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & { variant?: "h1" | "h2" | "h3" }
>(({ className, variant = "h3", ...props }, ref) => {
  if (variant === "h1") {
    return (
      <h1
        ref={ref}
        className={cn(
          "text-6xl font-bold tracking-tight text-foreground mb-[1rem] leading-13",
          className
        )}
        {...props}
      />
    );
  }

  if (variant === "h2") {
    return (
      <h2
        ref={ref}
        className={cn(
          "md:text-3xl text-2xl font-bold tracking-tight mb-[1rem] leading-10",
          className
        )}
        {...props}
      />
    );
  }

  return (
    <h3
      ref={ref}
      className={cn(
        "text-xl font-semibold tracking-tight mb-[0.7-rem] leading-7",
        className
      )}
      {...props}
    />
  );
});
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & { variant?: "h2" }
>(({ className, variant = "h2", ...props }, ref) => {
  if (variant === "h2") {
    return (
      <p
        ref={ref}
        className={cn("relative text-muted-foreground", className)}
        {...props}
      />
    )
  }

  return (
    <p
      ref={ref}
      className={cn("relative text-muted-foreground", className)}
      {...props}
    />
  )
})
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
