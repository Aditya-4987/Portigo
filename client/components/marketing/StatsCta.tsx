import { Button } from "@/components/ui/button";

export default function StatsCta() {
  const stats = [
    { label: "Templates", value: "1000+" },
    { label: "Portfolios created", value: "1000+" },
    { label: "Stars on socials", value: "1000+" },
    { label: "Projects shipped", value: "1000+" },
  ];
  return (
    <section className="border-y border-white/10 bg-black/40 py-16">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="text-3xl font-bold">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-10 text-center">
          <h3 className="font-serif text-3xl">Your Portfolio. Live in Minutes. Beautiful for Years.</h3>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">No code. No headaches. Just stunning results. Start with a template and make it yours.</p>
          <a href="#templates" className="mt-6 inline-block"><Button size="lg" className="rounded-full px-8">Get Started</Button></a>
        </div>
      </div>
    </section>
  );
}
