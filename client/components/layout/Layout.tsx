import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      id="top"
      className="min-h-screen bg-gradient-to-b from-white to-zinc-50 text-foreground dark:from-black dark:to-zinc-900"
    >
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
