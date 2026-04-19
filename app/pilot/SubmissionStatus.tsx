export default function SubmissionStatus({
  name,
  firm,
  submittedAt,
  email,
}: {
  name: string;
  firm: string;
  submittedAt: string;
  email: string;
}) {
  const firstName = name.trim().split(/\s+/)[0] || "there";
  const submittedLabel = new Date(submittedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <h1 className="mb-3 text-center text-3xl font-bold text-white md:text-4xl">
        Welcome to the club, {firstName}.
      </h1>
      <p className="mx-auto mb-10 max-w-md text-center text-sm text-white/50">
        Your intake for <strong className="text-white/80">{firm}</strong> landed
        on {submittedLabel}. We&apos;ll reach out at{" "}
        <strong className="text-white/80">{email}</strong> to book a quick
        conversation.
      </p>

      <div className="liquid-glass rounded-2xl p-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <StatusStep label="Intake received" state="done" />
          <StatusStep label="Welcome email sent" state="done" />
          <StatusStep label="Beta access granted" state="active" />
        </div>
      </div>
    </>
  );
}

function StatusStep({
  label,
  state,
}: {
  label: string;
  state: "done" | "active" | "pending";
}) {
  const dot =
    state === "done"
      ? "bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)]"
      : state === "active"
      ? "bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.6)]"
      : "bg-white/15";
  const pingColor =
    state === "done"
      ? "bg-green-500"
      : state === "active"
      ? "bg-amber-500"
      : "";
  const text =
    state === "pending" ? "text-white/35" : "text-white/80";
  return (
    <div className="flex items-center gap-3">
      <span className="relative flex h-2.5 w-2.5">
        {state !== "pending" && (
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${pingColor}`} />
        )}
        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${dot}`} />
      </span>
      <span className={`text-sm ${text}`}>{label}</span>
    </div>
  );
}
