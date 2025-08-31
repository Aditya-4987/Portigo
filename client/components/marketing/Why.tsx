import { Bolt, Gauge, MonitorSmartphone, Shapes } from "lucide-react";

const features = [
  { icon: Shapes, title: "No Code", desc: "Design without writing a single line of code." },
  { icon: MonitorSmartphone, title: "Pro Templates", desc: "Responsive layouts for designers, devs, and photographers." },
  { icon: Gauge, title: "Easy Analytics", desc: "Built-in analytics to track visitors and conversions." },
  { icon: Bolt, title: "Instant Hosting", desc: "Global CDN with SSL and custom domains." },
];

export default function Why() {
  return (
    <section id="features" className="border-y border-white/10 bg-black/40 py-16">
      <div className="container">
        <h2 className="mb-8 font-serif text-3xl sm:text-4xl">Why Portigo?</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
