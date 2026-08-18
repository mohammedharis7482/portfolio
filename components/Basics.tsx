import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="text-micro rounded-full border border-[var(--color-border)] bg-white px-3 py-1.5 text-[var(--color-text-secondary)]">
      {children}
    </span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="text-[13px] rounded-full border border-[var(--color-border)] px-3 py-1 text-[var(--color-text-secondary)]">
      {children}
    </span>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return (
    <hr className={`border-t border-[var(--color-border)] ${className}`} />
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-micro text-[var(--color-accent)] mb-4">{children}</p>
  );
}

export function AvailabilityDot({
  light = false,
}: {
  light?: boolean;
}) {
  return (
    <span
      className={`inline-block h-2 w-2 rounded-full ${
        light ? "bg-[var(--color-accent)]" : "bg-[var(--color-accent)]"
      }`}
    />
  );
}

export function SectionHeading({
  eyebrow,
  heading,
  body,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  heading: ReactNode;
  body?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-[680px]" : "max-w-[680px]"}>
      {eyebrow && (
        <p className={`text-micro mb-4 ${dark ? "text-[var(--color-accent)]" : "text-[var(--color-accent)]"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-section ${
          dark ? "text-white" : "text-[var(--color-text-primary)]"
        }`}
      >
        {heading}
      </h2>
      {body && (
        <p
          className={`text-body-lg mt-5 ${
            dark ? "text-gray-300" : ""
          }`}
        >
          {body}
        </p>
      )}
    </div>
  );
}
