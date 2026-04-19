"use client";

const RULES = [
  { label: "12 characters minimum", test: (p: string) => p.length >= 12 },
  { label: "Lowercase letter", test: (p: string) => /[a-z]/.test(p) },
  { label: "Uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
  { label: "Number", test: (p: string) => /\d/.test(p) },
  { label: "Symbol", test: (p: string) => /[^a-zA-Z0-9]/.test(p) },
];

export default function PasswordChecklist({ password }: { password: string }) {
  if (!password) return null;

  return (
    <ul className="mt-2 space-y-1">
      {RULES.map((rule) => {
        const pass = rule.test(password);
        return (
          <li
            key={rule.label}
            className={`flex items-center gap-2 font-[family-name:var(--font-jetbrains-mono)] text-xs transition-colors ${
              pass ? "text-green-400" : "text-white/30"
            }`}
          >
            <span className="flex h-3.5 w-3.5 items-center justify-center">
              {pass ? (
                <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                  <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
              )}
            </span>
            {rule.label}
          </li>
        );
      })}
    </ul>
  );
}

export function isPasswordValid(password: string): boolean {
  return RULES.every((rule) => rule.test(password));
}
