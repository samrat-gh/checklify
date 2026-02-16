"use client";

import { SquareCheckBig } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
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
        <h1 className="mb-8 font-bold text-4xl sm:text-5xl">
          Terms and Conditions
        </h1>
        <p className="mb-8 text-muted-foreground">
          Last updated: February 16, 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="mb-4 font-semibold text-2xl">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using Checklify ("the Service"), you agree to be
              bound by these Terms and Conditions. If you do not agree to these
              terms, please do not use our Service. We reserve the right to
              update these terms at any time, and your continued use of the
              Service constitutes acceptance of any modifications.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">
              2. Description of Service
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Checklify is a personal task management application that allows
              users to create, organize, and track tasks. The Service includes
              features such as task creation and management, project
              organization with color coding, task scheduling with date and time
              options, time tracking capabilities, and task status management.
              We reserve the right to modify, suspend, or discontinue any part
              of the Service at any time.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">3. User Accounts</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              To use Checklify, you must create an account. You agree to:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Provide accurate, current, and complete information during
                registration
              </li>
              <li>
                Maintain the security of your account credentials and not share
                them with others
              </li>
              <li>
                Notify us immediately of any unauthorized access to your account
              </li>
              <li>
                Accept responsibility for all activities that occur under your
                account
              </li>
            </ul>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We reserve the right to suspend or terminate accounts that violate
              these terms or for any other reason at our discretion.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">4. Acceptable Use</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              You agree to use Checklify only for lawful purposes and in
              accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>
                Attempt to gain unauthorized access to the Service, other
                accounts, or any related systems
              </li>
              <li>
                Interfere with or disrupt the integrity or performance of the
                Service
              </li>
              <li>
                Upload or transmit viruses, malware, or other malicious code
              </li>
              <li>
                Use automated systems or software to extract data from the
                Service without permission
              </li>
              <li>
                Harass, abuse, or harm others through your use of the Service
              </li>
              <li>
                Impersonate any person or entity or falsely represent your
                affiliation
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">5. User Content</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              You retain ownership of all content you create within Checklify,
              including tasks, projects, and any associated data ("User
              Content"). By using the Service, you grant us a limited license to
              store, process, and display your User Content solely for the
              purpose of providing the Service to you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You are solely responsible for your User Content and represent
              that you have all necessary rights to the content you create.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">
              6. Intellectual Property
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service and its original content (excluding User Content),
              features, and functionality are owned by Checklify and are
              protected by international copyright, trademark, patent, trade
              secret, and other intellectual property laws. You may not copy,
              modify, distribute, sell, or lease any part of our Service without
              explicit written permission.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">7. Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your use of Checklify is also governed by our Privacy Policy,
              which describes how we collect, use, and protect your personal
              information. By using the Service, you consent to our data
              practices as described in the{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">
              8. Service Availability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to maintain high availability of the Service, but we do
              not guarantee uninterrupted access. The Service may be temporarily
              unavailable due to maintenance, updates, or circumstances beyond
              our control. We are not liable for any loss or damage resulting
              from service interruptions.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">
              9. Disclaimer of Warranties
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT
              NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
              A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
              WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED,
              ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL
              COMPONENTS.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">
              10. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, CHECKLIFY AND ITS
              AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT
              BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS,
              DATA, USE, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF
              THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY
              OTHER LEGAL THEORY.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">11. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify, defend, and hold harmless Checklify and
              its affiliates, officers, directors, employees, and agents from
              any claims, liabilities, damages, losses, or expenses (including
              reasonable attorney fees) arising out of or related to your use of
              the Service, your violation of these Terms, or your violation of
              any rights of another party.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">12. Termination</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              We may terminate or suspend your account and access to the Service
              immediately, without prior notice or liability, for any reason,
              including if you breach these Terms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Upon termination, your right to use the Service will immediately
              cease. If you wish to terminate your account, you may do so by
              contacting us or using account management features within the
              Service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">13. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              applicable laws, without regard to conflict of law principles. Any
              disputes arising from these Terms or your use of the Service shall
              be resolved in the appropriate courts of applicable jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">14. Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision shall be limited or eliminated to the
              minimum extent necessary so that these Terms shall otherwise
              remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">
              15. Changes to Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. We will
              provide notice of significant changes by posting the updated Terms
              on the Service and updating the "Last updated" date. Your
              continued use of the Service after changes are posted constitutes
              acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-2xl">16. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms and Conditions, please
              contact us through our application support channels.
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
