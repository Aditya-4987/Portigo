import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="border-t border-white/10 bg-black/40 py-16">
      <div className="container grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl">Let's Talk. We'd Love to Hear from You.</h2>
          <p className="mt-4 text-muted-foreground">Questions about templates, domains, or anything else? Send us a message and we'll get back to you shortly.</p>
        </div>
        <form
          className="grid gap-4 rounded-xl border border-white/10 bg-white/5 p-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3000);
          }}
        >
          <div className="grid gap-2 sm:grid-cols-2">
            <Input required placeholder="Name" />
            <Input required type="email" placeholder="Email Address" />
          </div>
          <Textarea required rows={6} placeholder="Your message" />
          <div className="flex items-center gap-3">
            <Button className="rounded-full px-8" type="submit">Submit</Button>
            {sent && <span className="text-sm text-muted-foreground">Message sent. We'll reply soon.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
