import { ReactNode } from "react";

export default function Container({
  children,
  wide = false,
  className = "",
}: {
  children: ReactNode;
  wide?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-6 md:px-8 lg:px-12 ${
        wide ? "max-w-[1440px]" : "max-w-[1320px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
