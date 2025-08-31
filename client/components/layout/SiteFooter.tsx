export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="container grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#top" className="text-2xl font-black tracking-wide">
            PORTIGO
          </a>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Build a stunning portfolio in minutes. No code required.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground">
            Product
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#templates" className="hover:underline">
                Templates
              </a>
            </li>
            <li>
              <a href="#features" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground">
            Company
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="pointer-events-none opacity-50">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="pointer-events-none opacity-50">
                Press
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#" className="pointer-events-none opacity-50">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="pointer-events-none opacity-50">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Portigo. All rights reserved.
      </div>
    </footer>
  );
}
