import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  href?: string;
  to?: string;
  variant?: "primary" | "secondary";
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, href, to, type = "button", variant = "primary", ...props }, ref) => {
  const sharedClassName = cn(
    "group relative inline-flex items-center justify-center min-w-[180px] cursor-pointer overflow-hidden rounded-full px-5 py-3 text-[14px] font-bold uppercase tracking-[0.08em] transition-colors duration-200 ease-in-out whitespace-nowrap gap-2",
    variant === "primary"
      ? "border-[1.5px] border-[var(--gold)] bg-[var(--gold)] text-[var(--bg-primary)] shadow-[0_12px_24px_rgba(212,160,23,0.18)] hover:bg-[var(--bg-primary)] hover:text-[var(--gold)] hover:border-[var(--gold)]"
      : "border-[1.5px] border-[rgba(245,243,239,0.5)] bg-transparent text-[var(--text-primary)] hover:bg-[var(--gold)] hover:text-[var(--bg-primary)] hover:border-[var(--gold)]",
    className,
  );

  const content = (
    <>
      <span className="inline-flex items-center justify-center gap-2 transition-all duration-200 group-hover:opacity-0">
        <span>{text}</span>
        <ArrowRight className="h-4 w-4" />
      </span>

      <div className="absolute inset-0 z-10 flex items-center justify-center gap-2 px-5 opacity-0 transition-all duration-200 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight className="h-4 w-4" />
      </div>

    </>
  );

  if (to) {
    return (
      <Link to={to} className={sharedClassName}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={sharedClassName}>
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      className={sharedClassName}
      {...props}
    >
      {content}
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
