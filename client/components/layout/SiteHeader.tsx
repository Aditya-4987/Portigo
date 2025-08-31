import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/theme/ThemeToggle";

const links = [
  { href: "#templates", label: "Templates" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="text-xl font-black tracking-wide">PORTIGO</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <div className="mr-2">
            <ThemeToggle />
          </div>
          <a href="#templates">
            <Button size="sm" className="rounded-full px-6">
              Get Started
            </Button>
          </a>
        </div>
        <button
          className="md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 md:hidden">
          <div className="container grid gap-2 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-2">
              <ThemeToggle />
              <a href="#templates" className="flex-1 pl-4">
                <Button className="w-full rounded-full">Get Started</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
