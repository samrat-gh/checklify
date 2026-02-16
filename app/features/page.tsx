"use client";

import {
  Calendar,
  CheckCircle2,
  Clock,
  FolderKanban,
  Lock,
  Palette,
  Play,
  SquareCheckBig,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: CheckCircle2,
    title: "Task Management",
    description:
      "Create, edit, and organize your tasks with ease. Mark tasks as open, in-progress, or closed to track your workflow.",
    details: [
      "Quick task creation",
      "Three status states: Open, In Progress, Closed",
      "Edit tasks anytime",
      "Delete completed tasks",
    ],
  },
  {
    icon: FolderKanban,
    title: "Project Organization",
    description:
      "Group related tasks into projects for better organization. Keep your work structured and easy to navigate.",
    details: [
      "Create unlimited projects",
      "Assign tasks to projects",
      "Filter tasks by project",
      "Rename or delete projects",
    ],
  },
  {
    icon: Palette,
    title: "Color-Coded Projects",
    description:
      "Customize your projects with colors to visually distinguish between different areas of your life or work.",
    details: [
      "Multiple color options",
      "Visual task grouping",
      "Quick project identification",
      "Beautiful dark UI integration",
    ],
  },
  {
    icon: Star,
    title: "Priority Tasks",
    description:
      "Mark important tasks as priorities so they stand out. Never lose sight of what matters most.",
    details: [
      "One-click priority toggle",
      "Visual priority indicator",
      "Focus on what's important",
      "Easy priority management",
    ],
  },
  {
    icon: Calendar,
    title: "Task Scheduling",
    description:
      "Schedule tasks with specific dates to plan your work ahead. Stay on top of deadlines and commitments.",
    details: [
      "Date picker integration",
      "Schedule tasks for any day",
      "View scheduled tasks",
      "Never miss a deadline",
    ],
  },
  {
    icon: Clock,
    title: "Time Picker",
    description:
      "Set specific times for your tasks alongside dates. Perfect for meetings, calls, or time-sensitive work.",
    details: [
      "Hour and minute selection",
      "AM/PM support",
      "Combine with date scheduling",
      "Precise time management",
    ],
  },
  {
    icon: Play,
    title: "Built-in Timer",
    description:
      "Track time spent on tasks with the integrated timer. Start, pause, and monitor your productivity.",
    details: [
      "One-click timer start/stop",
      "Tracks total time per task",
      "Pause and resume anytime",
      "Productivity insights",
    ],
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Monitor your task completion and see your productivity patterns. Watch your progress grow over time.",
    details: [
      "Task status overview",
      "Completion tracking",
      "Visual progress indicators",
      "Motivation through metrics",
    ],
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description:
      "Your data is private and secure. Authentication ensures only you can access your tasks and projects.",
    details: [
      "Secure authentication",
      "Private workspace",
      "Data isolation",
      "Cloud-synced safely",
    ],
  },
  {
    icon: Zap,
    title: "Fast & Responsive",
    description:
      "Built with modern technology for a snappy experience. Real-time sync keeps your data up to date instantly.",
    details: [
      "Real-time updates",
      "Optimistic UI",
      "No page reloads needed",
      "Works on any device",
    ],
  },
];

export default function FeaturesPage() {
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

      {/* Hero Section */}
      <section className="px-4 pt-32 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 font-bold text-4xl sm:text-5xl lg:text-6xl">
            Powerful Features, Simple Design
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Everything you need to manage your tasks effectively. No clutter, no
            complexity—just the tools that matter.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 font-semibold text-xl">{feature.title}</h3>
                <p className="mb-4 text-muted-foreground">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-2 text-muted-foreground text-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-border border-t px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-bold text-3xl sm:text-4xl">
            Ready to boost your productivity?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Start using Checklify today—it's completely free.
          </p>
          <Link href="/dashboard" passHref>
            <Button
              size="lg"
              className="cursor-pointer! bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            >
              Get Started for Free
            </Button>
          </Link>
        </div>
      </section>

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
