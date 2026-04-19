import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import PilotFlow from "./PilotFlow";
import SubmissionStatus from "./SubmissionStatus";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default async function PilotPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/pilot");
  }

  const { data: existing } = await supabase
    .from("pilot_submissions")
    .select("id, full_name, firm, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a] px-4 py-16 md:py-24">
      <DottedSurface className="absolute inset-x-0 bottom-0 top-auto h-[45%] overflow-hidden" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[45%]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(245,158,11,0.1) 0%, transparent 70%), linear-gradient(to top, transparent 0%, rgba(10,10,10,0.7) 90%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-2xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-amber-500">
          Intake
        </p>

        {existing ? (
          <SubmissionStatus
            name={existing.full_name}
            firm={existing.firm}
            submittedAt={existing.created_at}
            email={user.email ?? ""}
          />
        ) : (
          <>
            <h1 className="mb-3 text-center text-3xl font-bold text-white md:text-4xl">
              Let&apos;s get you ready.
            </h1>
            <p className="mx-auto mb-10 max-w-md text-center text-sm text-white/50">
              Four quick steps, about 30 seconds. We use this to tailor our
              pipeline to yours — especially while in beta.
            </p>
            <PilotFlow
              defaultEmail={user.email ?? ""}
              defaultName={user.user_metadata?.full_name ?? ""}
              userId={user.id}
            />
          </>
        )}
      </div>
    </div>
  );
}
