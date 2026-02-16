"use client";

import { Check, Sparkles, SquareCheckBig } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
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
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-bold text-4xl sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-muted-foreground">
            Checklify is completely free to use. No hidden fees, no credit card
            required.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="mx-auto max-w-md">
          <div className="relative rounded-2xl border border-primary bg-card p-8">
            <div className="-top-3 -translate-x-1/2 absolute left-1/2">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 font-medium text-primary-foreground text-sm">
                <Sparkles className="h-4 w-4" />
                Free Forever
              </span>
            </div>

            <div className="mb-6 text-center">
              <h2 className="mb-2 font-bold text-2xl">Free Plan</h2>
              <div className="mb-2 flex items-baseline justify-center gap-1">
                <span className="font-bold text-5xl">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Everything you need to stay organized
              </p>
            </div>

            <ul className="mb-8 space-y-4">
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-muted-foreground">Unlimited tasks</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-muted-foreground">
                  Unlimited projects
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-muted-foreground">
                  Task scheduling with date & time
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-muted-foreground">
                  Built-in time tracking
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-muted-foreground">
                  Color-coded project organization
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-muted-foreground">Priority tagging</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-muted-foreground">Secure cloud sync</span>
              </li>
            </ul>

            <Link href="/dashboard" passHref className="block">
              <Button
                size="lg"
                className="w-full cursor-pointer! bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get Started for Free
              </Button>
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="mb-8 text-center font-bold text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 font-semibold text-lg">
                Will Checklify always be free?
              </h3>
              <p className="text-muted-foreground">
                Checklify is currently free for all users. If we introduce paid
                plans in the future, existing features will remain available to
                free users. We believe in providing value first.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 font-semibold text-lg">
                Are there any usage limits?
              </h3>
              <p className="text-muted-foreground">
                No! You can create unlimited tasks and projects. There are no
                artificial restrictions on how you use Checklify.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 font-semibold text-lg">
                Do I need a credit card to sign up?
              </h3>
              <p className="text-muted-foreground">
                No credit card is required. Simply create an account and start
                organizing your tasks immediately.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 font-semibold text-lg">
                How is my data protected?
              </h3>
              <p className="text-muted-foreground">
                Your data is stored securely in the cloud with industry-standard
                encryption. Each user's data is isolated and only accessible to
                them. Read our{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>{" "}
                for more details.
              </p>
            </div>
          </div>
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
