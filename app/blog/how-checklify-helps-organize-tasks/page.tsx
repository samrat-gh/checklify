"use client";

import { ArrowLeft, Calendar, Clock, SquareCheckBig } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HowChecklifyHelpsOrganizeTasks() {
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

      {/* Article Content */}
      <main className="mx-auto max-w-3xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="mb-6 font-bold text-3xl sm:text-4xl lg:text-5xl">
            How Checklify Can Help You Organize Your Tasks
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              February 16, 2026
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />5 min read
            </span>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Let me be honest with you. I used to be that person with seventeen
            sticky notes on my monitor, three half-filled notebooks on my desk,
            and a phone full of reminder apps I'd forget to check. Sound
            familiar? If you've ever laid in bed at 2 AM suddenly remembering
            something important you forgot to do, this one's for you.
          </p>

          <h2 className="mt-10 mb-4 font-semibold text-2xl">
            We've All Been There
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Here's the thing about most task management apps—they're built by
            people who seem to have way more time than the rest of us. "Just
            spend 30 minutes every morning planning your day!" they say. "Set up
            your custom workflows and integrations!" Cool, but I barely have
            time to finish my coffee before the chaos starts.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I tried them all. The fancy ones with the beautiful dashboards that
            I'd set up perfectly... and then never open again. The "simple" ones
            that somehow still needed a YouTube tutorial. After a while, I
            realized I was spending more time managing my task manager than
            actually doing tasks. That's when I thought: there has to be a
            better way.
          </p>

          <h2 className="mt-10 mb-4 font-semibold text-2xl">
            What Actually Works (For Real Humans)
          </h2>

          <h3 className="mt-6 mb-3 font-semibold text-xl">
            Just Write It Down
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            You know what's beautiful? Being able to just... type something and
            have it saved. That's it. No "which project does this belong to?"
            popup. No required due date. No priority matrix. Just your thought,
            captured, before it disappears. You can organize it later if you
            want, but first—get it out of your head. That's what Checklify lets
            you do.
          </p>

          <h3 className="mt-6 mb-3 font-semibold text-xl">
            Keep Your Worlds Separate
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            My grocery list has no business being next to my work deadlines. And
            that side project I'm excited about? It deserves its own space, not
            to be buried under "call the dentist" and "pay electricity bill."
            Projects in Checklify are like having different notebooks for
            different parts of your life—except you won't lose them under your
            couch. Oh, and you can color-code them, which honestly just makes me
            happy.
          </p>

          <h3 className="mt-6 mb-3 font-semibold text-xl">
            Three States. That's It.
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Open. In Progress. Done. That's how work actually happens, right?
            You're either going to do something, actively doing it, or it's
            finished. I don't need twelve custom statuses and a flowchart to
            track that. Sometimes simple really is better.
          </p>

          <h3 className="mt-6 mb-3 font-semibold text-xl">
            Star the Important Stuff
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            We all have those tasks that keep us up at night. The ones that
            actually matter. One click, and they stand out from everything else.
            Because let's be real—when everything is marked as "HIGH PRIORITY
            URGENT!!!" nothing actually feels urgent anymore.
          </p>

          <h3 className="mt-6 mb-3 font-semibold text-xl">
            Schedule It (If You Want To)
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Some things need to happen on specific days. Bill due on the 15th.
            Meeting at 3 PM. Birthday present needed by Saturday. Add a date,
            add a time if you need to be precise. Or don't—not everything needs
            a deadline. The choice is yours.
          </p>

          <h3 className="mt-6 mb-3 font-semibold text-xl">
            The Timer (My Personal Favorite)
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Okay, this one surprised me. I started using the built-in timer just
            out of curiosity, and wow—I had no idea how wrong I was about how
            long things take. That "quick 15-minute task"? Two hours. The thing
            I'd been putting off for days? Twenty minutes. It's weirdly
            eye-opening, and it's helped me plan my days way better.
          </p>

          <h2 className="mt-10 mb-4 font-semibold text-2xl">
            Why This Actually Matters
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Look, I'm not here to promise that Checklify will change your life
            or make you a productivity guru. But here's what I've noticed since
            I started using it:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              <strong className="text-foreground">I sleep better</strong> –
              Sounds dramatic, but seriously. When everything's written down, my
              brain stops doing that anxious thing at 11 PM where it cycles
              through everything I might be forgetting.
            </li>
            <li>
              <strong className="text-foreground">Less decision fatigue</strong>{" "}
              – I know what's next. I don't have to stare at my desk wondering
              what to do. It's already written down.
            </li>
            <li>
              <strong className="text-foreground">
                Actually finishing things
              </strong>{" "}
              – There's something satisfying about marking a task as done. It's
              silly, but it works. Those small wins add up.
            </li>
            <li>
              <strong className="text-foreground">Fewer dropped balls</strong> –
              I used to forget things all the time. Now? Much less. My partner
              has noticed.
            </li>
          </ul>

          <h2 className="mt-10 mb-4 font-semibold text-2xl">
            Oh, and It's Free
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            No "free trial" that suddenly wants your credit card. No "premium
            features" that lock away the stuff you actually need. Just... free.
            I know, kind of unusual these days. We wanted to build something
            useful first, without the pressure of monetizing every feature.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            And yes, your stuff is safe. Secure login, your data stays yours,
            all that good stuff. We're not selling your task list to advertisers
            (ugh, can you imagine?).
          </p>

          <h2 className="mt-10 mb-4 font-semibold text-2xl">Give It a Shot</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you're still using sticky notes, or if your current app feels
            like it's working against you instead of for you, maybe give
            Checklify a try. Takes about 30 seconds to sign up, and you can
            always go back to your sticky notes if it's not for you.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            But hopefully, you'll find what I found—a quiet little place to
            organize your thoughts, without all the noise. Sometimes that's
            exactly what you need.
          </p>
        </article>

        {/* CTA */}
        <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
          <h3 className="mb-4 font-semibold text-2xl">
            Ready to get organized?
          </h3>
          <p className="mb-6 text-muted-foreground">
            Start managing your tasks the simple way—completely free.
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
