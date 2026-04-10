/**
 * Atria brand lockup — amber A-frame icon + Instrument Serif wordmark.
 * Brand spec: .superdesign/atria-brand-kit.md
 */

type LogoProps = {
  variant?: "lockup" | "wordmark" | "icon";
  className?: string;
  iconSize?: number;
};

function AtriaIcon({
  size = 28,
  stroke = "#f59e0b",
  strokeWidth = 2,
}: {
  size?: number;
  stroke?: string;
  strokeWidth?: number;
}) {
  // Atria mark: outer gable triangle + inner chevron (inner peak).
  // Source: SuperDesign brand guidelines draft 389a5c27.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50 15L85 75H15L50 15Z" stroke={stroke} strokeWidth={strokeWidth} />
      <path d="M35 75L50 45L65 75" stroke={stroke} strokeWidth={strokeWidth} />
    </svg>
  );
}

export default function Logo({
  variant = "lockup",
  className = "",
  iconSize = 28,
}: LogoProps) {
  if (variant === "icon") {
    return (
      <span className={className}>
        <AtriaIcon size={iconSize} />
      </span>
    );
  }

  if (variant === "wordmark") {
    return (
      <span
        className={`font-[family-name:var(--font-instrument-serif)] text-white leading-none tracking-tight ${className}`}
      >
        atria
      </span>
    );
  }

  // lockup (default): icon + wordmark
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <AtriaIcon size={iconSize} />
      <span className="font-[family-name:var(--font-instrument-serif)] text-white leading-none tracking-tight">
        atria
      </span>
    </span>
  );
}
