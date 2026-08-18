import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "dark" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--color-accent-dark)] text-white hover:brightness-90",
  secondary:
    "bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-text-primary)]",
  dark: "bg-[var(--color-dark-section)] text-white hover:bg-black",
  ghost:
    "bg-white text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-text-primary)]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  onClick?: () => void;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] px-6 py-3 text-[15px] font-medium transition-colors duration-200 min-h-[44px] ${variantClasses[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
