import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Privacy Policy — Atria",
  description: "How Atria collects, uses, and protects your information.",
};

const EFFECTIVE_DATE = "April 17, 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] px-6 py-16 md:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <Logo variant="lockup" className="text-2xl" iconSize={24} />
        </div>

        <h1 className="mb-2 text-4xl font-bold text-white">Privacy Policy</h1>
        <p className="mb-12 text-sm text-white/40">Effective: {EFFECTIVE_DATE}</p>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <p>
              Atria (&quot;we&quot;, &quot;us&quot;) operates <strong className="text-white">atria.build</strong>, a
              feasibility platform for real estate developers. This policy explains what information we collect, how
              we use it, and the choices you have.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Information we collect</h2>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong className="text-white">Account information.</strong> When you sign up, we collect your email
                address, name, and (if you sign in with Google or Microsoft) the public profile fields those
                providers share with us.
              </li>
              <li>
                <strong className="text-white">Waitlist and pilot intake.</strong> If you request a conversation or
                submit a pilot intake form, we collect the information you provide — typically name, work email,
                firm, role, firm type, and project volume.
              </li>
              <li>
                <strong className="text-white">Uploaded content.</strong> If you upload drone footage, aerial
                imagery, or site descriptions, we store that content to produce feasibility outputs for you.
              </li>
              <li>
                <strong className="text-white">Usage data.</strong> We collect basic analytics about how the site is
                used (pages viewed, approximate location from IP, device and browser information).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">How we use information</h2>
            <ul className="ml-5 list-disc space-y-2">
              <li>To provide the service you signed up for.</li>
              <li>To contact you about pilot conversations, product updates, and support.</li>
              <li>To improve the product, fix bugs, and understand how the service is used.</li>
              <li>To comply with legal obligations and enforce our terms.</li>
            </ul>
            <p className="mt-3">We do not sell your personal information.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Service providers</h2>
            <p className="mb-3">We share information with vendors who process it on our behalf:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong className="text-white">Supabase</strong> — authentication, database, and file storage.
              </li>
              <li>
                <strong className="text-white">Vercel</strong> — hosting and deployment.
              </li>
              <li>
                <strong className="text-white">Google and Microsoft</strong> — OAuth sign-in (if you use them).
              </li>
              <li>
                <strong className="text-white">Mailchimp</strong> — waitlist email processing.
              </li>
              <li>
                <strong className="text-white">Apollo</strong> — visitor analytics.
              </li>
            </ul>
            <p className="mt-3">
              Each provider has its own privacy practices. We only share the minimum data needed for them to do
              their job.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Cookies</h2>
            <p>
              We use cookies for authenticated sessions and basic analytics. You can disable cookies in your
              browser, but signed-in features will stop working.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Data retention</h2>
            <p>
              We keep your account information for as long as your account is active, and form submissions for as
              long as needed to operate the service and comply with legal obligations. You can request deletion at
              any time.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Your rights</h2>
            <p className="mb-3">
              Depending on where you live, you may have the right to access, correct, delete, or export your
              personal information, or to object to certain processing. To exercise any of these rights, email us
              at the address below.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Security</h2>
            <p>
              We use industry-standard security practices, including encryption in transit and at rest through our
              infrastructure providers. No system is perfectly secure, so we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Children</h2>
            <p>
              Atria is a B2B product for real estate professionals. We do not knowingly collect information from
              anyone under 18.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Changes</h2>
            <p>
              We may update this policy from time to time. When we do, we will update the &quot;Effective&quot; date
              above. Material changes will be announced by email or on the site.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Contact</h2>
            <p>
              Questions or requests: <a href="mailto:privacy@atria.build" className="text-amber-500 hover:text-amber-400">privacy@atria.build</a>
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <Link href="/" className="text-sm text-amber-500 hover:text-amber-400">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
