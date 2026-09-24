import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold uppercase tracking-[0.08em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--gold)] text-[var(--bg-primary)] shadow-[0_12px_24px_rgba(212,160,23,0.18)] hover:bg-[var(--gold-hover)] hover:scale-[1.02]",
        secondary:
          "border border-[var(--gold)] bg-transparent text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--bg-primary)] hover:scale-[1.02]",
        default:
          "bg-[var(--gold)] text-[var(--bg-primary)] shadow-[0_12px_24px_rgba(212,160,23,0.18)] hover:bg-[var(--gold-hover)] hover:scale-[1.02]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-[var(--gold)] bg-transparent text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--bg-primary)]",
        ghost:
          "border border-[var(--gold)] bg-transparent text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--bg-primary)]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-9 rounded-full px-4 text-xs",
        lg: "h-11 rounded-full px-7 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
