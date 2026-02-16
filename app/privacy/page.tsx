"use client";

import { SquareCheckBig } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-border border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg">
              <SquareCheckBig
                color="#ffffff"
                className="size-5 text-primary-foreground md:size-6"
              />
            </div>
            <span className="font-bold text-lg">Checklify</span>
          </Link>
          <Link href="/dashboard" passHref>
            <Button
              size="sm"
              className="cursor-pointer! bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <h1 className="mb-8 font-bold text-4xl sm:text-5xl">Privacy Policy</h1>
        <p className="mb-8 text-muted-foreground">
          Last updated: February 16, 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="mb-4 font-semibold text-2xl">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Checklify ("we," "our," or "us"). We are committed to
              protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our task
              management application.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">
              2. Information We Collect
            </h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              We collect information that you provide directly to us and
              information that is automatically collected when you use our
              service.
            </p>

            <h3 className="mb-3 font-semibold text-xl">
              2.1 Information You Provide
            </h3>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  Account Information:
                </strong>{" "}
                When you create an account, we collect your email address and
                authentication credentials through our authentication provider
                (Clerk).
              </li>
              <li>
                <strong className="text-foreground">Task Data:</strong> The
                tasks you create, including task descriptions, project
                assignments, priority settings, scheduled dates and times, and
                time tracking information.
              </li>
              <li>
                <strong className="text-foreground">Project Data:</strong>{" "}
                Project names and color preferences you set for organizing your
                tasks.
              </li>
            </ul>

            <h3 className="mb-3 font-semibold text-xl">
              2.2 Automatically Collected Information
            </h3>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong className="text-foreground">Usage Analytics:</strong> We
                use Google Analytics and Vercel Analytics to collect information
                about how you interact with our application, including pages
                visited and feature usage.
              </li>
              <li>
                <strong className="text-foreground">Device Information:</strong>{" "}
                Browser type, operating system, and device identifiers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">
              3. How We Use Your Information
            </h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Provide, maintain, and improve our task management service
              </li>
              <li>
                Store and sync your tasks and projects across your devices
              </li>
              <li>Authenticate your identity and secure your account</li>
              <li>
                Analyze usage patterns to improve user experience and develop
                new features
              </li>
              <li>
                Communicate with you about service updates and important notices
              </li>
              <li>Prevent fraud and ensure the security of our service</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">4. Data Storage</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your data is stored securely using Convex, a cloud database
              service. All data is associated with your unique user ID and is
              only accessible to you when authenticated. We implement
              industry-standard security measures to protect your information
              from unauthorized access, alteration, or destruction.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">5. Data Sharing</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              We do not sell your personal information. We may share your
              information only in the following circumstances:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong className="text-foreground">Service Providers:</strong>{" "}
                We work with third-party services (Clerk for authentication,
                Convex for data storage, Vercel for hosting) that help us
                operate our application.
              </li>
              <li>
                <strong className="text-foreground">Legal Requirements:</strong>{" "}
                When required by law or to protect our rights, privacy, safety,
                or property.
              </li>
              <li>
                <strong className="text-foreground">Business Transfers:</strong>{" "}
                In connection with a merger, acquisition, or sale of assets.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">
              6. Your Rights and Choices
            </h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong className="text-foreground">Access:</strong> You can
                access all your tasks and projects through the application.
              </li>
              <li>
                <strong className="text-foreground">Correction:</strong> You can
                edit your tasks and projects at any time.
              </li>
              <li>
                <strong className="text-foreground">Deletion:</strong> You can
                delete individual tasks and projects, or request complete
                account deletion by contacting us.
              </li>
              <li>
                <strong className="text-foreground">Data Export:</strong> You
                may request a copy of your data by contacting us.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">7. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar technologies for authentication
              purposes and to analyze usage patterns through our analytics
              providers. You can control cookie settings through your browser
              preferences.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">8. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security
              measures to protect your personal information. However, no method
              of transmission over the Internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">
              9. Children's Privacy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Checklify is not intended for children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If you believe we have collected information from a child under
              13, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">
              10. Changes to This Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date. Your continued use
              of Checklify after any changes constitutes acceptance of the
              updated policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us through our application support
              channels.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-border border-t px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="mb-4 flex items-center gap-2">
                <SquareCheckBig
                  color="#ffffff"
                  className="size-5 text-primary-foreground md:size-6"
                />
                <span className="font-bold">Checklify</span>
              </Link>
              <p className="text-muted-foreground text-sm">
                Simple task management that just works.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Product</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <Link
                    href="/features"
                    className="transition hover:text-primary"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="transition hover:text-primary"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Company</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <Link href="#" className="transition hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="transition hover:text-primary">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Legal</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <Link
                    href="/privacy"
                    className="transition hover:text-primary"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="transition hover:text-primary">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between border-border border-t pt-8 text-muted-foreground text-sm sm:flex-row">
            <p>
              &copy; {new Date().getFullYear()} Checklify. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
