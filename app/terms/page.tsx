import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Terms of Service — Atria",
  description: "The terms that govern your use of Atria.",
};

const EFFECTIVE_DATE = "April 17, 2026";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] px-6 py-16 md:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <Logo variant="lockup" className="text-2xl" iconSize={24} />
        </div>

        <h1 className="mb-2 text-4xl font-bold text-white">Terms of Service</h1>
        <p className="mb-12 text-sm text-white/40">Effective: {EFFECTIVE_DATE}</p>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <p>
              These Terms govern your access to and use of{" "}
              <strong className="text-white">atria.build</strong> and the Atria services (the &quot;Service&quot;).
              By using the Service, you agree to these Terms. If you are using the Service on behalf of a company,
              you agree on that company&apos;s behalf.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">The service</h2>
            <p>
              Atria is a feasibility platform that generates photorealistic, zoning-aware renderings from drone
              footage or aerial imagery. The Service is currently in early access. Features, pricing, and
              availability may change.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Accounts</h2>
            <ul className="ml-5 list-disc space-y-2">
              <li>You must provide accurate information when you sign up.</li>
              <li>You are responsible for keeping your credentials secure.</li>
              <li>
                You are responsible for everything that happens under your account. Notify us immediately at the
                address below if you suspect unauthorized access.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Acceptable use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>Use the Service to violate any law or third-party right.</li>
              <li>Upload content you do not have the right to use.</li>
              <li>Reverse-engineer, resell, or sublicense the Service.</li>
              <li>Probe, scan, or test the vulnerability of the Service without our written permission.</li>
              <li>Interfere with other users or degrade the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Your content</h2>
            <p>
              You keep ownership of the footage, imagery, and site descriptions you upload (&quot;Your
              Content&quot;). You grant us a non-exclusive license to use Your Content solely to operate, provide,
              and improve the Service for you. We will not sell Your Content or use it to train third-party models.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Our content</h2>
            <p>
              The Service, including our software, designs, and outputs generated for you, is owned by Atria and
              protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable
              license to use the Service for your internal business purposes.
            </p>
            <p className="mt-3">
              Atria outputs are <strong className="text-white">conceptual feasibility renderings</strong>, not
              construction drawings or zoning determinations. Always confirm with a licensed architect, engineer,
              and local jurisdiction before making investment or construction decisions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Feedback</h2>
            <p>
              If you send us feedback or suggestions, we may use them without obligation to you.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Termination</h2>
            <p>
              You can stop using the Service at any time. We may suspend or terminate your access if you violate
              these Terms or if we need to for legal, security, or operational reasons. Sections that by their
              nature should survive termination (ownership, disclaimers, liability limits, governing law) will
              survive.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Disclaimers</h2>
            <p>
              The Service is provided &quot;as is&quot; and &quot;as available.&quot; To the fullest extent
              permitted by law, we disclaim all warranties, express or implied, including merchantability, fitness
              for a particular purpose, and non-infringement. We do not warrant that the Service will be
              uninterrupted, error-free, or meet your requirements.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Atria will not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of profits or revenue, whether incurred
              directly or indirectly. Our total liability for any claim arising out of or relating to the Service
              is limited to the greater of (a) amounts you paid us in the 12 months before the claim, or (b) one
              hundred U.S. dollars.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Indemnification</h2>
            <p>
              You agree to defend and indemnify Atria from claims arising out of your use of the Service, Your
              Content, or your violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Governing law</h2>
            <p>
              These Terms are governed by the laws of the State of Delaware, without regard to conflict-of-laws
              rules. Any dispute will be resolved exclusively in the state or federal courts located in Delaware,
              and you consent to personal jurisdiction there.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Changes to these terms</h2>
            <p>
              We may update these Terms from time to time. Material changes will be announced by email or on the
              site. Your continued use of the Service after changes take effect means you accept the updated
              Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Contact</h2>
            <p>
              Questions: <a href="mailto:legal@atria.build" className="text-amber-500 hover:text-amber-400">legal@atria.build</a>
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
