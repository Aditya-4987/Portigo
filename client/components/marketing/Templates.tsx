import { Button } from "@/components/ui/button";

const templates = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  img: `https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop#${i}`,
  title: `Pro Creative ${i + 1}`,
}));

export default function Templates() {
  return (
    <section id="templates" className="py-16">
      <div className="container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl">
            Make any template yours with ease.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Drag-and-drop sections, custom colors, and instant preview before
            publishing.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((t) => (
            <div
              key={t.id}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <div className="relative">
                <img
                  src={t.img}
                  alt={t.title}
                  className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="text-sm font-medium">{t.title}</h3>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="rounded-full">
                    Preview
                  </Button>
                  <Button size="sm" className="rounded-full">
                    Use Template
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="secondary" className="rounded-full px-6">
            See more templates
          </Button>
        </div>
      </div>
    </section>
  );
}
