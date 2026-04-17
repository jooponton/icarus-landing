/**
 * Atria brand lockup — amber gateway arch + Plus Jakarta Sans wordmark.
 * Source: SuperDesign gateway portal direction, draft 29a684d8.
 */

type LogoProps = {
  variant?: "lockup" | "wordmark" | "icon";
  className?: string;
  iconSize?: number;
};

function AtriaIcon({
  size = 28,
  stroke = "#f59e0b",
}: {
  size?: number;
  stroke?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1000 1000"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M220 850C220 400 350 150 500 150C650 150 780 400 780 850"
        stroke={stroke}
        strokeWidth="100"
        strokeLinecap="round"
      />
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
        className={`font-[family-name:var(--font-plus-jakarta)] font-bold text-white leading-none tracking-[-0.05em] ${className}`}
      >
        atria
      </span>
    );
  }

  // lockup (default): icon + wordmark
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <AtriaIcon size={iconSize} />
      <span className="font-[family-name:var(--font-plus-jakarta)] font-bold text-white leading-none tracking-[-0.05em]">
        atria
      </span>
    </span>
  );
}
