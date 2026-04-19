import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Cookie Policy — Atria",
  description: "How Atria uses cookies and similar technologies.",
};

const EFFECTIVE_DATE = "April 19, 2026";

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] px-6 py-16 md:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <Link href="/">
            <Logo variant="lockup" className="text-2xl" iconSize={24} />
          </Link>
        </div>

        <h1 className="mb-2 text-4xl font-bold text-white">Cookie Policy</h1>
        <p className="mb-12 text-sm text-white/40">Effective: {EFFECTIVE_DATE}</p>

        <div className="space-y-8 leading-relaxed text-white/70">
          <section>
            <p>
              This policy explains how Atria (&quot;we&quot;, &quot;us&quot;) uses cookies and similar technologies on{" "}
              <strong className="text-white">atria.build</strong>. It should be read alongside our{" "}
              <Link href="/privacy" className="text-amber-500 hover:text-amber-400">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">What cookies are</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They let the site remember
              your actions and preferences (like being signed in) across pages and visits. Similar technologies
              include local storage, session storage, and tracking pixels.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Cookies we use</h2>
            <ul className="ml-5 list-disc space-y-3">
              <li>
                <strong className="text-white">Strictly necessary.</strong> Session cookies from Supabase that keep
                you signed in, remember your CSRF token, and keep the site functioning. The site will not work
                without these.
              </li>
              <li>
                <strong className="text-white">Preferences.</strong> Local storage entries that remember your cookie
                banner choice so we do not ask again.
              </li>
              <li>
                <strong className="text-white">Analytics.</strong> Vercel Analytics and Vercel Speed Insights use
                cookie-less measurement to understand aggregate site performance and traffic.
              </li>
              <li>
                <strong className="text-white">Visitor analytics.</strong> Apollo sets a first-party cookie to
                identify returning visitors. This fires only after you accept cookies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Your choices</h2>
            <p className="mb-3">
              When you first visit atria.build you will see a cookie banner. You can:
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong className="text-white">Accept</strong> — all cookies above will be set.
              </li>
              <li>
                <strong className="text-white">Decline</strong> — only strictly necessary cookies will be set. Analytics
                and visitor tracking will not run.
              </li>
            </ul>
            <p className="mt-3">
              You can also disable or delete cookies in your browser settings. If you disable strictly necessary
              cookies, signed-in features (including the pilot intake) will stop working.
            </p>
            <p className="mt-3">
              To change your banner choice, clear this site&apos;s cookies and local storage in your browser, then
              refresh.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Third parties</h2>
            <p>
              Some cookies are set by our service providers on our behalf. Each provider has its own cookie and
              privacy practices:
            </p>
            <ul className="ml-5 mt-3 list-disc space-y-2">
              <li>Supabase — authentication session cookies.</li>
              <li>Vercel — performance and analytics measurement.</li>
              <li>Apollo — visitor analytics.</li>
              <li>Google, Microsoft — only if you sign in with those providers.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Changes</h2>
            <p>
              We may update this policy as we add or remove tools. When we do, we will update the &quot;Effective&quot;
              date above.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Contact</h2>
            <p>
              Questions:{" "}
              <a href="mailto:privacy@atria.build" className="text-amber-500 hover:text-amber-400">
                privacy@atria.build
              </a>
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-sm text-white/40">
          <Link href="/" className="hover:text-amber-500">
            ← Back to Atria
          </Link>
        </div>
      </div>
    </div>
  );
}
