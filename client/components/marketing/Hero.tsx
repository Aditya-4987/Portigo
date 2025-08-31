import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop"
          alt="Hero background"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
      </div>
      <div className="container flex min-h-[72vh] flex-col items-start justify-center gap-6 py-24">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide text-muted-foreground backdrop-blur">
          Portfolio Builder
        </span>
        <h1 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
          Bring your portfolio live
          <span className="block font-sans text-lg font-normal text-muted-foreground sm:text-xl md:text-2xl">
            Beautiful templates, zero code, instant hosting.
          </span>
        </h1>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#templates">
            <Button size="lg" className="rounded-full px-8">
              Get Started
            </Button>
          </a>
          <a
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
