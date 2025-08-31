import { CheckCircle2, Edit3, Share2 } from "lucide-react";

const items = [
  {
    icon: CheckCircle2,
    title: "Select a template",
    desc: "Choose from a library of professional designs crafted for creatives.",
  },
  { icon: Edit3, title: "Edit and publish", desc: "Customize text, images, and colors. Publish with one click." },
  { icon: Share2, title: "Share and connect", desc: "Connect your domain and share your work with the world." },
];

export default function Steps() {
  return (
    <section className="border-y border-white/10 bg-zinc-950/40 py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="mt-1 rounded-md bg-primary/20 p-2 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
