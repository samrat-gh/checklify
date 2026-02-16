"use client";

import {
  CheckCircle2,
  Lock,
  Palette,
  SquareCheckBig,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-border border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg">
              <SquareCheckBig
                color="#ffffff"
                className="size-5 text-primary-foreground md:size-6"
              />
            </div>
            <span className="font-bold text-lg">Checklify</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/features"
              className="text-sm transition hover:text-primary"
            >
              Features
            </Link>
          </div>
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

      {/* Hero Section */}
      <section className="px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-balance font-bold text-5xl sm:text-6xl lg:text-7xl">
            Simplify your Checklist with Checklify
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-balance text-muted-foreground text-xl sm:text-2xl">
            Simple task management that just works. Focus on what matters, not
            the tool.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                className="cursor-pointer! bg-primary px-8 text-primary-foreground hover:bg-primary/90"
              >
                Get Started
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-border bg-transparent px-8 hover:bg-secondary"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="border-border border-t px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-4xl sm:text-5xl">
              Everything you need to stay organized
            </h2>
            <p className="text-lg text-muted-foreground">
              Clean, powerful features designed for focused task management.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Feature 1 */}
            <div className="rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 font-semibold text-xl">Smart Organization</h3>
              <p className="text-muted-foreground">
                Create tasks with priorities, organize into color-coded
                projects, and track everything at a glance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 font-semibold text-xl">Visual Projects</h3>
              <p className="text-muted-foreground">
                Color-coded projects make it easy to categorize and filter your
                tasks exactly how you want them.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 font-semibold text-xl">Progress Tracking</h3>
              <p className="text-muted-foreground">
                Monitor your completion status and see your productivity grow in
                real-time.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 font-semibold text-xl">Private Workspace</h3>
              <p className="text-muted-foreground">
                Your tasks are private to you. Secure authentication means your
                data stays yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-border border-t px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-bold text-4xl sm:text-5xl">
            Ready to get organized?
          </h2>
          <p className="mb-8 text-muted-foreground text-xl">
            Start managing your tasks the simple way, today.
          </p>
          <Link href="/dashboard" passHref>
            <Button
              size="lg"
              className="cursor-pointer! bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            >
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-border border-t px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-4 flex items-center gap-2">
                <SquareCheckBig
                  color="#ffffff"
                  className="size-5 text-primary-foreground md:size-6"
                />
                <span className="font-bold">Checklify</span>
              </div>
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
