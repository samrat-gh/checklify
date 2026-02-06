import type { Metadata } from "next";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Checklist | Personal Task Manager",
  description: "A minimal personal task management tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="">
        <Toaster richColors />
        <Analytics />
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
