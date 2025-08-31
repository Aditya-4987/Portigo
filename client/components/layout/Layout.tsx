import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div id="top" className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
