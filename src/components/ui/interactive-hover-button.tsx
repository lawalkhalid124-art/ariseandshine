import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  href?: string;
  to?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, href, to, type = "button", ...props }, ref) => {
  const sharedClassName = cn(
    "group relative w-32 cursor-pointer overflow-hidden rounded-full border border-[#d7b36a]/60 bg-[#1a2b3d] p-2 text-center font-semibold text-white shadow-lg shadow-[#1a2b3d]/20 transition-all duration-300 hover:border-[#d7b36a] hover:shadow-[#d7b36a]/15",
    className,
  );

  const content = (
    <>
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight />
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-[#d7b36a] transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-[#d7b36a]"></div>
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
