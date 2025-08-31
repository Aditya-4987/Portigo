export default function Showcase() {
  return (
    <section className="py-16">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h3 className="font-serif text-3xl">Your Portfolio Is Your First Impression</h3>
          <p className="mt-4 text-muted-foreground">Make it count. Choose from beautiful layouts that put your work first and your brand front-and-center.</p>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <img src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1600&auto=format&fit=crop" alt="Showcase 1" className="w-full" />
        </div>
      </div>
      <div className="container mt-16 grid items-center gap-12 lg:grid-cols-2">
        <div className="relative order-last overflow-hidden rounded-xl border border-white/10 bg-white/5 lg:order-none">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop" alt="Showcase 2" className="w-full" />
        </div>
        <div>
          <h3 className="font-serif text-3xl">Elegant, Responsive, and Built to Impress</h3>
          <p className="mt-4 text-muted-foreground">Every template adapts seamlessly to phones, tablets, and desktops. Your work looks great everywhere.</p>
        </div>
      </div>
      <div className="container mt-16 grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h3 className="font-serif text-3xl">Zero Code. Zero Hassle. Just Done.</h3>
          <p className="mt-4 text-muted-foreground">Connect a domain, publish instantly, and keep creating. We’ll handle the hosting, updates, and performance.</p>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop" alt="Showcase 3" className="w-full" />
        </div>
      </div>
    </section>
  );
}
