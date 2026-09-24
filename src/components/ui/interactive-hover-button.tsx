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
    "group relative w-32 cursor-pointer overflow-hidden rounded-full px-5 py-3 text-center text-[14px] font-bold uppercase tracking-[0.08em] transition-all duration-300",
    variant === "primary"
      ? "border border-[var(--gold)] bg-[var(--gold)] text-[var(--bg-primary)] shadow-[0_12px_24px_rgba(212,160,23,0.18)] hover:bg-[var(--gold-hover)] hover:scale-[1.02]"
      : "border border-[rgba(255,255,255,0.45)] bg-transparent text-[var(--text-primary)] hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--bg-primary)] hover:scale-[1.02]",
    className,
  );

  const content = (
    <>
      <span className="inline-flex items-center justify-between gap-3 transition-all duration-300 group-hover:opacity-0">
        <span>{text}</span>
        {variant === "primary" ? <ArrowRight className="h-4 w-4" /> : null}
      </span>

      <div className="absolute inset-0 z-10 flex items-center justify-between gap-3 px-5 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight className="h-4 w-4" />
      </div>

      {variant === "primary" ? (
        <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-[rgba(232,181,46,0.75)] transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-[rgba(232,181,46,0.75)]"></div>
      ) : null}
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
