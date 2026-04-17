import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import PilotForm from "./PilotForm";

export default async function PilotPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/pilot");
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] px-4 py-12 md:py-24">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-amber-500">
          Pilot Intake
        </p>
        <h1 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">
          Tell us about your pipeline
        </h1>
        <p className="mb-10 text-center text-base text-white/60">
          We use this to tailor the pilot to your actual workflow. Takes 2
          minutes.
        </p>

        <PilotForm
          defaultEmail={user.email ?? ""}
          defaultName={user.user_metadata?.full_name ?? ""}
          userId={user.id}
        />
      </div>
    </div>
  );
}
